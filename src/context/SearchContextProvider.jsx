import React, { useState, useEffect, createContext, useContext } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { AlertContext } from "./AlertContextProvider";
import AddOn from "../models/AddOn";
import Prices from "../models/Prices";

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
  const [contextMaxPriceRange, setMaxPriceRange] = useState(1000);

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
        `${
          process.env.REACT_APP_BACKEND_URL
        }/api/trips/search?searchTerm=${term}&day=${dayjs(
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

    console.log(res.data);

    let localeMax = 0;
    let trips = res.data;
    trips = trips.map((trip) => {
      let price = new Prices(trip.prices).getPrice(count);
      if (price * count > localeMax) localeMax = Math.ceil(price * count);
      return {
        ...trip,
        price: price * count,
      };
    });
    setSearchResults(trips);
    setIsSearchResultsLoading(false);
    setMaxPrice(localeMax);
    setMaxPriceRange(localeMax);
  };

  useEffect(() => {
    const getCities = async () => {
      let res;
      try {
        res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/cities`
        );
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

    // clear trip price
    filteredTrips = filteredTrips.map((trip) => {
      return {
        ...trip,
        price: 0,
      };
    });

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

    let localeMax = 0;
    if (accommodation !== 0) {
      filteredTrips = filteredTrips.filter((trip) => {
        for (let i = 0; i < trip.accommodations.length; i++) {
          if (trip.accommodations[i].name === accommodation) {
            let acc = new AddOn(
              trip.accommodations[i].name,
              trip.accommodations[i].prices,
              false
            );
            trip.addedPrice = acc.getPrice(contextGuests);
            console.log(trip.addedPrice);
            return true;
          }
        }
      });

      filteredTrips = filteredTrips.map((trip) => {
        let newPrice =
          (new Prices(trip.prices).getPrice(contextGuests) + trip.addedPrice) *
          contextGuests;
        if (newPrice > localeMax) localeMax = Math.ceil(newPrice);

        return {
          ...trip,
          price: newPrice,
        };
      });
      setMaxPrice(localeMax);
    }

    console.log(filteredTrips);

    filteredTrips = filteredTrips.filter((trip) => {
      let price =
        trip.price ||
        new Prices(trip.prices).getPrice(contextGuests) * contextGuests;
      let max;
      if (priceRange[1] === contextMaxPrice && localeMax > 0) {
        max = localeMax;
        setMaxPriceRange(localeMax);
      } else {
        max = priceRange[1];
        if (localeMax === 0) {
          let localeMax = 0;
          filteredTrips.map((trip) => {
            let price = new Prices(trip.prices).getPrice(contextGuests);
            if (price * contextGuests > localeMax)
              localeMax = Math.ceil(price * contextGuests);
          });
          setMaxPrice(localeMax);
        }
      }
      if (price >= priceRange[0] && price <= max) return true;
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
        contextMaxPrice,
        contextMaxPriceRange,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
