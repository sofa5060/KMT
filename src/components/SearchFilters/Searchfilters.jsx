import React, { useState, useEffect, useContext } from "react";
import "./Searchfilters.css";
import Searchfilter from "./Searchfilter";
import Pricefilter from "./Pricefilter";
import { SearchContext } from "../../context/SearchContextProvider";

export default function Searchfilters({ big }) {
  const { contextCities } = useContext(SearchContext);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filters, setFilters] = useState([
    {
      name: "Destinations",
      options: contextCities.map((city) => {
        return { name: city, checked: false };
      }),
    },
    {
      name: "Duration",
      options: [
        { name: "1 Day", checked: false },
        { name: "2-5 Days", checked: false },
        { name: "5-10 Days", checked: false },
        { name: "10-15 Days", checked: false },
      ],
    },
    {
      name: "Rating",
      options: [
        { name: "3 Star", checked: false },
        { name: "4 Stars", checked: false },
        { name: "5 Stars", checked: false },
      ],
    },
  ]);

  useEffect(() => {
    // TODO: get price range from backend
  }, [priceRange]);

  const handleSubmit = (event) => {
    event.preventDefault();
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
              <Searchfilter filter={filter} key={filter.name} />
              <hr />
            </React.Fragment>
          )
      )}
      <Pricefilter priceRange={priceRange} />
      <input type="submit" value="Apply" className="btn" />
    </form>
  );
}
