import React, { useState, useContext, useEffect } from "react";
import dayjs from "dayjs";
import Searchtextbox from "./Searchtextbox";
import "./Searchbox.css";
import location from "../../images/location.svg";
import clock from "../../images/clock.svg";
import people from "../../images/people.svg";
import Datepicker from "./Datepicker";
import { SearchContext } from "../../context/SearchContextProvider";
import { useHistory } from "react-router-dom";
import Guestspicker from "../GuestsPicker/Guestspicker";
import SearchQuery from "../../models/SearchQuery";
import { useMediaQuery } from "@mui/material";

export default function Searchbox({ minimized }) {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState(dayjs());
  const [guests, setGuests] = useState(1);

  const matches = useMediaQuery("(max-width:800px)");

  const {
    setSearchObj,
    searchObj,
    searchWithObj,
    isRedirectedFromOutside,
    setIsRedirectedFromOutside,
  } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!minimized) {
      // Creating a new search object with input parameters
      let localSearchObj = new SearchQuery(searchQuery, date, guests);

      // Searching with that obj and redirecting to the search results page using the useEffect hook
      searchWithObj(localSearchObj);

      // Setting the search object in the context so the search results page can use it
      setSearchObj(localSearchObj);
      setIsRedirectedFromOutside(true);
      return;
    }

    // create a new search object with the input parameters but with the same filters
    let localSearchObj = searchObj.generateNewObj();
    localSearchObj.searchQuery = searchQuery;
    localSearchObj.date = date;
    localSearchObj.guests = guests;

    // Searching with that obj
    searchWithObj(localSearchObj);

    // Setting the search object in the context so the search results page can use it
    setSearchObj(localSearchObj);
  };

  useEffect(() => {
    // Redirecting to the search results page when the search object is ready
    if (!minimized && searchObj !== null && isRedirectedFromOutside) {
      history.push(`/search/${searchQuery}`);
    }

    if (minimized) {
      if (searchObj !== null && isRedirectedFromOutside) {
        // Setting the search box values with the search object values in the search results page
        setIsRedirectedFromOutside(false);
        setSearchQuery(searchObj.searchQuery);
        setDate(searchObj.date);
        setGuests(searchObj.guests);
      }
    }
  }, [searchObj, isRedirectedFromOutside]);

  useEffect(() => {
    if (minimized) {
      // Creating a new search object with input parameters
      let localSearchObj = searchObj.generateNewObj();
      localSearchObj.searchQuery = searchQuery;
      localSearchObj.date = date;
      localSearchObj.guests = guests;

      // Setting the search object in the context so the search results page can use it
      setSearchObj(localSearchObj);
    }
  }, [searchQuery, date, guests]);

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className={minimized ? "search-terms minimized" : "search-terms"}>
        <div className="search-term">
          <div className="icon-header">
            <img src={location} alt="" />
            {!minimized && <h4>Location</h4>}
          </div>
          <div className="term">
            <Searchtextbox
              setSearchQuery={setSearchQuery}
              value={searchQuery}
            />
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon-header">
            <img src={clock} alt="" />
            {!minimized && <h4>Date</h4>}
          </div>
          <div className="term">
            <div className="date-picker">
              <Datepicker setDate={setDate} inputDate={date} />
            </div>
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon-header">
            <img src={people} alt="" />
            {!minimized && <h4>Guests</h4>}
          </div>
          <div className="term">
            <Guestspicker setGuestsCount={setGuests} value={guests} />
          </div>
        </div>
      </div>
      <input
        type="submit"
        value={matches ? "Search" : ""}
        className="search-btn"
      />
    </form>
  );
}
