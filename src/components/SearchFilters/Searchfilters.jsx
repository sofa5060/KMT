import React, { useState, useEffect, useContext } from "react";
import "./Searchfilters.css";
import Searchfilter from "./Searchfilter";
import Pricefilter from "./Pricefilter";
import { SearchContext } from "../../context/SearchContextProvider";

export default function Searchfilters() {
  const { searchObj } = useContext(SearchContext);
  const [filters, setFilters] = useState([
    {
      name: "Destinations",
      options: [
        { name: "Luxor", checked: false },
        { name: "Aswan", checked: false },
        { name: "Cairo", checked: false },
        { name: "Giza", checked: false },
        { name: "Alexandria", checked: false },
      ],
    },
    {
      name: "Duration",
      options: [
        { name: "1 Day", checked: false },
        { name: "2-5 Days", checked: false },
        { name: "5-10 Days", checked: false },
        { name: "10-15 Days", checked: false },
        { name: "15-20 Days", checked: false },
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

  const priceRange = [0, 1000];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (searchObj && searchObj.isSelectedCity) {
      filters[0].options.find(option => option.name === searchObj.searchQuery).checked = true;
    }
  }, []);

  if(!filters) return <div></div>;
  return (
    <form className="search-filters" onSubmit={handleSubmit}>
      {filters.map((filter) => (
        <div>
          <Searchfilter filter={filter} key={filter.name} />
          <hr />
        </div>
      ))}
      <Pricefilter priceRange={priceRange} />
      <input type="submit" value="Submit" className="btn" />
    </form>
  );
}
