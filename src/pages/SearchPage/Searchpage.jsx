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
import { LanguageContext } from "../../context/LanguageContextProvider";

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
  const { contextLanguage, renderContent } = useContext(LanguageContext);
  const { tripName } = useParams();
  let resultsPerPage = 3;
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("A-Z");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const matches = useMediaQuery("(min-width: 1001px)");

  useEffect(() => {
    if (
      tripName !== undefined &&
      (isWaitingForSearch || (!isWaitingForSearch && contextSearchTerm === ""))
    ) {
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
  };

  useEffect(() => {
    if (sortBy === "A-Z") {
      setTrips([
        ...searchResults.sort((a, b) =>
          a[contextLanguage].title.localeCompare(b[contextLanguage].title)
        ),
      ]);
    } else if (sortBy === "Z-A") {
      setTrips([
        ...searchResults.sort((a, b) =>
          b[contextLanguage].title.localeCompare(a[contextLanguage].title)
        ),
      ]);
    } else if (sortBy === "Lowest Price") {
      setTrips([
        ...searchResults.sort((a, b) => {
          let priceA = a.price;
          let priceB = b.price;
          return priceA - priceB;
        }),
      ]);
    } else if (sortBy === "Highest Price") {
      setTrips([
        ...searchResults.sort((a, b) => {
          let priceA = a.discountedPrice > 0 ? a.discountedPrice : a.price;
          let priceB = b.discountedPrice > 0 ? b.discountedPrice : b.price;
          return priceB - priceA;
        }),
      ]);
    } else if (sortBy === "Top Destinations") {
      setTrips([...searchResults.sort((a, b) => b.sells - a.sells)]);
    }

    setPage(1);
  }, [sortBy, searchResults]);

  useEffect(() => {
    setCurrPage("trips");
  }, []);

  useEffect(() => {
    console.log(trips);
  }, [trips]);

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
                {renderContent("Found: ", "Encontrados: ", "Encontrados: ")}
                <span>{trips.length} Premium Tours</span>
              </h3>
              <button
                className="btn"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                {renderContent("Filters", "Filtros", "Filtros")}
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
              <h2>
                {renderContent(
                  "No results found",
                  "No se encontraron resultados",
                  "Nenhum resultado encontrado"
                )}
              </h2>
              <h3 style={{ textAlign: "center" }}>
                {renderContent(
                  "Try searching for another trip or another date",
                  "Intenta buscar otro viaje o otra fecha",
                  "Tente procurar outra viagem ou outra data"
                )}
              </h3>
            </div>
          )}
          {trips.length !== 0 && !isSearchResultsLoading && (
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
