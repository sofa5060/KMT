import React, { useState } from "react";
import "./Searchfilters.css";
import Searchfilter from "./Searchfilter";
import Pricefilter from "./Pricefilter";

export default function Searchfilters() {
  const fiters = [
    {
      name: "Destinations",
      options: [
        { name: "Luxor", checked: true },
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
      ]
    },
    {
      name: "Rating",
      options: [
        { name: "3 Star", checked: false },
        { name: "4 Stars", checked: false },
        { name: "5 Stars", checked: false },
      ]
    }
  ];

  const priceRange = [0, 1000];

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
    <form className="search-filters" onSubmit={handleSubmit}>
      {fiters.map((filter, index) => (
        <div>
          <Searchfilter filter={filter} key={index}/>
          <hr />
        </div>
      ))}
      <Pricefilter priceRange={priceRange}/>
      <input type="submit" value="Submit" className="btn"/>
    </form>
  );
}
