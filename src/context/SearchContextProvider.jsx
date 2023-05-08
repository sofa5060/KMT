import React, { useState, useEffect, createContext, useContext } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { AlertContext } from "./AlertContextProvider";
import AddOn from "../models/AddOn";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [contextSearchTerm, setSearchTerm] = useState("");
  const [contextDate, setContextDate] = useState(dayjs());
  const [contextGuests, setContextGuests] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(false);
  const [isWaitingForSearch, setIsWaitingForSearch] = useState(false);
  const [contextCities, setCities] = useState([]);
  const [contextFilteredTrips, setFilteredTrips] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [clearFilters, setClearFilters] = useState(false);
  const [contextMaxPrice, setMaxPrice] = useState(1000);

  const { showAlert } = useContext(AlertContext);

  const searchForTrip = async (term, date, count) => {
    setSearchTerm(term);
    setContextDate(date);
    setContextGuests(count);
    setIsSearched(true);
    setIsSearchResultsLoading(true);
    setClearFilters(true);
    setIsFiltered(false);
    let res;
    try {
      res = await axios.get(
        `http://localhost:5000/api/trips/search?searchTerm=${term}&day=${dayjs(
          date
        ).day()}&guests=${count}`
      );
    } catch (err) {
      console.log(err);
      if (!err.response) showAlert("error", "Error searching for trips");
      setSearchResults([]);
      setIsSearchResultsLoading(false);
      return;
    }

    let localeMax = 0;
    let trips = res.data;
    trips = trips.map((trip) => {
      if (trip.price * count > localeMax) localeMax = Math.ceil(trip.price * count);
      return {
        ...trip,
        price: trip.price * count,
      }
    });
    setSearchResults(trips);
    // setSearchResults(res.data);
    setIsSearchResultsLoading(false);
    setMaxPrice(localeMax);
  };

  useEffect(() => {
    const getCities = async () => {
      let res;
      try {
        res = await axios.get("http://localhost:5000/api/cities");
      } catch (err) {
        console.log(err);
        setCities([]);
        return;
      }
      setCities(res.data);
    };
    getCities();
  }, []);

  const filterTrips = (
    destinations,
    groupSize,
    durations,
    accommodation,
    priceRange
  ) => {
    let filteredTrips = [...searchResults];
    if (destinations.length > 0) {
      filteredTrips = filteredTrips.filter((trip) => {
        for (let i = 0; i < destinations.length; i++) {
          if (trip.cities.includes(destinations[i])) return true;
        }
      });
    }

    if (groupSize !== 1) {
      filteredTrips = filteredTrips.filter(
        (trip) => trip.maxGroupSize >= groupSize
      );
    }

    if (durations.length > 0) {
      filteredTrips = filteredTrips.filter((trip) => {
        for (let i = 0; i < durations.length; i++) {
          console.log(durations[i][0], durations[i][1], trip.dayDuration);
          if (
            trip.dayDuration >= durations[i][0] &&
            trip.dayDuration <= durations[i][1]
          )
            return true;
        }
      });
    }

    if (accommodation !== 0) {
      filteredTrips = filteredTrips.filter((trip) => {
        for (let i = 0; i < trip.accommodations.length; i++) {
          if (trip.accommodations[i].name === accommodation) {
            let acc = new AddOn(trip.accommodations[i].name, trip.accommodations[i].prices, false);
            trip.addedPrice = acc.getPrice(contextGuests);
            return true;
          }
        }
      });

      let localeMax = 0;
      filteredTrips = filteredTrips.map((trip) => {
        let newPrice = (trip.price + trip.addedPrice) * contextGuests;
        if (newPrice > localeMax) localeMax = Math.ceil(newPrice);

        return {
          ...trip,
          price: newPrice
        }
      });

      setMaxPrice(localeMax);
    }

    filteredTrips = filteredTrips.filter((trip) => {
      if (trip.price >= priceRange[0] && trip.price <= priceRange[1])
        return true;
    });

    setFilteredTrips(filteredTrips);
    setIsFiltered(true);
  };

  return (
    <SearchContext.Provider
      value={{
        contextSearchTerm,
        contextDate,
        setContextDate,
        contextGuests,
        setContextGuests,
        searchForTrip,
        searchResults: isFiltered ? contextFilteredTrips : searchResults,
        isSearched,
        setIsSearched,
        isSearchResultsLoading,
        contextCities,
        isWaitingForSearch,
        setIsWaitingForSearch,
        filterTrips,
        setClearFilters,
        clearFilters,
        contextMaxPrice
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
