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

  const { searchForTrip, contextSearchTerm, contextDate, contextGuests, setIsWaitingForSearch, setContextDate, setContextGuests } =
    useContext(SearchContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!minimized){
      setIsWaitingForSearch(true);
      setContextDate(date);
      setContextGuests(guests);
      history.replace(`/search/${searchQuery}`);
    }else{
      await searchForTrip(searchQuery, date, guests);
    }
  };

  useEffect(() => {
    if (minimized) {
      setSearchQuery(contextSearchTerm);
      setDate(contextDate);
      setGuests(contextGuests);
    }
  }, [minimized, contextSearchTerm, contextDate, contextGuests]);

  return (
    <form
      className={minimized ? "search-box minimized" : "search-box"}
      onSubmit={handleSubmit}
    >
      <div className="search-terms">
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
      <button className="search-btn">{matches ? "Search" : ""}</button>
    </form>
  );
}
