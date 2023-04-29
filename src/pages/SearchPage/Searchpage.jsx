import React, { useState, useEffect, useContext } from "react";
import Searchfilters from "../../components/SearchFilters/Searchfilters";
import "./Searchpage.css";
import pyramids from "../../images/wallpapersden.png";
import Triplist from "../../components/TripList/Triplist";
import nile from "../../images/nile.png";
import Pagination from "@mui/material/Pagination";
import Sortselect from "../../components/SortSelect/Sortselect";
import Searchbox from "../../components/SearchBox/Searchbox";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../context/SearchContextProvider";
import SearchQuery from "../../models/SearchQuery";
import dayjs from "dayjs";
import { Collapse, useMediaQuery } from "@mui/material";

export default function Searchpage({ setCurrPage, allTrips }) {
  const { searchObj, setSearchObj, searchWithObj, setIsRedirectedFromOutside } =
    useContext(SearchContext);
  const { tripName } = useParams();
  let resultsPerPage = 3;
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("A-Z");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const matches = useMediaQuery("(min-width: 1001px)");

  useEffect(() => {
    console.log(tripName);
    // The user entered from the url and not from the search box
    if (tripName !== undefined && searchObj === null) {
      // Creating a new search object with the url parameter and searching with it
      let searchObj = new SearchQuery(tripName, dayjs(), 1);
      searchWithObj(searchObj);

      // Setting the search object in the context so the search results page can use it
      setSearchObj(searchObj);
      setIsRedirectedFromOutside(true);
    }
  }, [tripName]);

  useEffect(() => {
    // The user entered from the navbar link
    if (allTrips) {
      // Creating a new search object with the url parameter and searching with it
      let searchObj = new SearchQuery("", dayjs(), 1);
      searchWithObj(searchObj);

      // Setting the search object in the context so the search results page can use it
      setSearchObj(searchObj);
      setIsRedirectedFromOutside(true);
    }
  }, [allTrips]);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
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

  useEffect(() => {
    setCurrPage("trips");
  }, []);

  if (!searchObj) return <div>loading</div>;

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="cover">
          <img src={pyramids} alt="" />
        </div>
        <Searchbox minimized />
      </div>
      <div className="search-body">
        {matches && <Searchfilters />}
        <div className="search-result">
          <div className="search-result-first-row">
            <div className="search-result-group">
              <h3>
                Found: <span>{trips.length} Premium Tours</span>
              </h3>
              <button
                className="btn"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                Filters
              </button>
            </div>
            <Sortselect selectSort={selectSort} />
          </div>
          <div className="search-mobile-filters">
            <Collapse in={filtersOpen}>
              <Searchfilters big />
            </Collapse>
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
