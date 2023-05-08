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
import { Collapse, useMediaQuery, CircularProgress } from "@mui/material";

export default function Searchpage({ setCurrPage, allTrips }) {
  const {
    searchForTrip,
    searchResults,
    contextDate,
    contextGuests,
    isSearchResultsLoading,
    isWaitingForSearch,
    setIsWaitingForSearch,
    contextSearchTerm,
  } = useContext(SearchContext);
  const { tripName } = useParams();
  let resultsPerPage = 3;
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("A-Z");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [startSort, setStartSort] = useState(true);

  const matches = useMediaQuery("(min-width: 1001px)");

  useEffect(() => {
    if (
      tripName !== undefined &&
      (isWaitingForSearch || (!isWaitingForSearch && contextSearchTerm === ""))
    ) {
      console.log("Runned");
      searchForTrip(tripName, contextDate, contextGuests);
      setIsWaitingForSearch(false);
    }
  }, [tripName, isWaitingForSearch]);

  useEffect(() => {
    if (allTrips) {
      searchForTrip("", contextDate, contextGuests);
    }
  }, [allTrips]);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const [trips, setTrips] = useState(searchResults);

  const selectSort = (sort) => {
    if (sort === sortBy) return;
    setSortBy(sort);
    setStartSort(true);
  };

  useEffect(() => {
    if (!trips || trips.length === 0 || !startSort) return;

    if (sortBy === "A-Z") {
      setTrips([...trips].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (sortBy === "Z-A") {
      setTrips([...trips].sort((a, b) => b.title.localeCompare(a.title)));
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
    setStartSort(false);
  }, [sortBy, trips, startSort]);

  useEffect(() => {
    setCurrPage("trips");
  }, []);

  useEffect(() => {
    setTrips(searchResults);
  }, [searchResults]);

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
          {trips.length === 0 && isSearchResultsLoading && (
            <div className="center">
              <CircularProgress />
            </div>
          )}
          {trips.length === 0 && !isSearchResultsLoading && (
            <div className="center">
              <h2>No results found</h2>
              <h3 style={{textAlign: "center"}}>Try searching for another trip or another date</h3>
            </div>
          )}
          {searchResults.length !== 0 && !isSearchResultsLoading && (
            <Triplist
              trips={trips.slice(
                (page - 1) * resultsPerPage,
                page * resultsPerPage
              )}
            />
          )}
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
