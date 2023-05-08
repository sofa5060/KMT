import React, { useState, useEffect, useContext } from "react";
import "./Searchfilters.css";
import Searchfilter from "./Searchfilter";
import Pricefilter from "./Pricefilter";
import { SearchContext } from "../../context/SearchContextProvider";

export default function Searchfilters({ big }) {
  const {
    contextCities,
    filterTrips,
    setClearFilters,
    clearFilters,
    contextMaxPrice,
  } = useContext(SearchContext);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [filteredMaxGroupSize, setFilteredMaxGroupSize] = useState(1);
  const [filteredDurations, setFilteredDurations] = useState([]); // ["1 Day", "2 - 5 Days", "5 - 10 Days", "10 - 15 Days"]
  const [accommodation, setAccommodation] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [filters, setFilters] = useState([
    {
      name: "Destinations",
      options: contextCities.map((city) => {
        return { name: city, checked: false };
      }),
    },
    {
      name: "Group Size",
      options: [
        { name: "1 - 3 Persons", checked: false },
        { name: "1 - 14 Persons", checked: false },
        { name: "1 - 24 Persons", checked: false },
        { name: "1 - 49 Persons", checked: false },
        { name: "1 - 99 Persons", checked: false },
      ],
    },
    {
      name: "Duration",
      options: [
        { name: "1 Day", checked: false },
        { name: "2 - 5 Days", checked: false },
        { name: "5 - 10 Days", checked: false },
        { name: "10 - 15 Days", checked: false },
      ],
    },
    {
      name: "Accommodation",
      options: [
        { name: "3 Stars Hotel", checked: false },
        { name: "4 Stars Hotel", checked: false },
        { name: "5 Stars Hotel", checked: false },
      ],
    },
  ]);

  const addToDestinations = (destination) => {
    setFilteredDestinations((prevDestinations) => [
      ...prevDestinations,
      destination,
    ]);
  };

  const removeFromDestinations = (destination) => {
    setFilteredDestinations((prevDestinations) =>
      prevDestinations.filter(
        (prevDestination) => prevDestination !== destination
      )
    );
  };

  const addToDurations = (min, max) => {
    setFilteredDurations((prevDurations) => [...prevDurations, [min, max]]);
  };

  const removeFromDurations = (min, max) => {
    setFilteredDurations((prevDurations) =>
      prevDurations.filter(
        (prevDuration) => prevDuration[0] !== min && prevDuration[1] !== max
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filterTrips(
      filteredDestinations,
      filteredMaxGroupSize,
      filteredDurations,
      accommodation,
      priceRange
    );
  };

  useEffect(() => {
    if (contextCities.length > 0) {
      setFilters((prevFilters) => {
        return prevFilters.map((filter) => {
          if (filter.name === "Destinations") {
            return {
              ...filter,
              options: contextCities.map((city) => {
                return { name: city, checked: false };
              }),
            };
          }
          return filter;
        });
      });
    }
  }, [contextCities]);

  useEffect(() => {
    if (!clearFilters) return;
    setFilteredDestinations([]);
    setFilteredMaxGroupSize(1);
    setFilteredDurations([]);
    setAccommodation(0);

    setFilters((prevFilters) => {
      let temp = prevFilters.map((filter) => {
        return {
          ...filter,
          options: filter.options.map((option) => {
            return { ...option, checked: false };
          }),
        };
      });

      return [...temp];
    });

    console.log(filters);

    setClearFilters(false);
  }, [clearFilters]);

  useEffect(() => {
    setMinPrice(0);
    setMaxPrice(contextMaxPrice);
    setPriceRange([0, contextMaxPrice]);
  }, [contextMaxPrice]);

  if (!filters) return <div></div>;

  return (
    <form
      className={big ? "search-filters big" : "search-filters"}
      onSubmit={handleSubmit}
    >
      {filters.map(
        (filter, index) =>
          filter.options?.length > 0 && (
            <React.Fragment key={index}>
              <Searchfilter
                filter={filter}
                key={filter.name}
                setFilteredMaxGroupSize={setFilteredMaxGroupSize}
                addToDestinations={addToDestinations}
                removeFromDestinations={removeFromDestinations}
                setAccommodation={setAccommodation}
                addToDurations={addToDurations}
                removeFromDurations={removeFromDurations}
              />
              <hr />
            </React.Fragment>
          )
      )}
      <Pricefilter
        priceRange={priceRange}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setPriceRange={setPriceRange}
      />
      <input type="submit" value="Apply" className="btn" />
    </form>
  );
}
