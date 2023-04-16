import React, { useState, useEffect } from "react";
import Searchfilters from "../../components/SearchFilters/Searchfilters";
import "./Searchpage.css";
import pyramids from "../../images/wallpapersden.png";
import Triplist from "../../components/TripList/Triplist";
import nile from "../../images/nile.png";
import Pagination from "@mui/material/Pagination";
import Sortselect from "../../components/SortSelect/Sortselect";
import Searchpage_Searchbox from "../../components/SearchBox/Searchpage_Searchbox";

export default function Searchpage() {
  let resultsPerPage = 3;
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("A-Z");

  const handleChange = (event, value) => {
    setPage(value);
  };

  const [trips, setTrips] = useState([
    {
      id: 1,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 99.99,
      image: nile,
      sells: 5,
    },
    {
      id: 2,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 99.99,
      image: nile,
      sells: 5,
    },
    {
      id: 3,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      image: nile,
      sells: 5,
    },
    {
      id: 3,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      image: nile,
      sells: 5,
    },
    {
      id: 3,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      image: nile,
      sells: 5,
    },
    {
      id: 3,
      name: "Lowest Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      image: nile,
      sells: 2,
    },
    {
      id: 3,
      name: "Highest Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      image: nile,
      sells: 10,
    },
    {
      id: 3,
      name: "Zelucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      image: nile,
      sells: 5,
    },
  ]);

  const selectSort = (sort) => {
    if (sort === sortBy) return;
    setSortBy(sort);
  };

  useEffect(() => {
    if (sortBy === "A-Z") {
      setTrips([...trips].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortBy === "Z-A") {
      setTrips([...trips].sort((a, b) => b.name.localeCompare(a.name)));
    } else if (sortBy === "Lowest Price") {
      setTrips(
        [...trips].sort((a, b) => {
          let priceA = a.discountedPrice > 0 ? a.discountedPrice : a.price;
          let priceB = b.discountedPrice > 0 ? b.discountedPrice : b.price;
          return priceA - priceB;
        })
      );
    } else if (sortBy === "Highest Price") {
      setTrips(
        [...trips].sort((a, b) => {
          let priceA = a.discountedPrice > 0 ? a.discountedPrice : a.price;
          let priceB = b.discountedPrice > 0 ? b.discountedPrice : b.price;
          return priceB - priceA;
        })
      );
    } else if (sortBy === "Top Destinations") {
      setTrips([...trips].sort((a, b) => b.sells - a.sells));
    }
    console.log(sortBy);
  }, [sortBy]);

  return (
    <div className="search-page">
      <div className="search-header">
        <img src={pyramids} alt="" />
        <Searchpage_Searchbox />
      </div>
      <div className="search-body">
        <Searchfilters />
        <div className="search-result">
          <div className="search-result-first-row">
            <h3>
              Found: <span>{trips.length} Premium Tours</span>
            </h3>
            <Sortselect selectSort={selectSort} />
          </div>
          <Triplist
            trips={trips.slice(
              (page - 1) * resultsPerPage,
              page * resultsPerPage
            )}
          />
          {trips.length > resultsPerPage && (
            <Pagination
              count={Math.ceil(trips.length / resultsPerPage)}
              page={page}
              onChange={handleChange}
              size="large"
            />
          )}
        </div>
      </div>
    </div>
  );
}
