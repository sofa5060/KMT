import React, { useState, useContext, useEffect } from "react";
import dayjs from "dayjs";
import Searchtextbox from "./Searchtextbox";
import "./Searchbox.css";
import location from "../../images/location.svg";
import clock from "../../images/clock.svg";
import people from "../../images/people.svg";
import Datepicker from "./Datepicker";
import minus from "../../images/minus 1.svg";
import plus from "../../images/plus 1.svg";
import { SearchContext } from "../../context/SearchContextProvider";
import { useHistory } from "react-router-dom";
import SearchQuery from "../../models/SearchQuery";

export default function Searchbox({ minimized }) {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState(dayjs());
  const [guests, setGuests] = useState(1);
  const [isSelectedCity, setIsSelectedCity] = useState(false);

  const {
    setIsRedirectedFromHome,
    isRedirectedFromHome,
    setSearchObj,
    searchObj,
  } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const localSearchObj = new SearchQuery(
      searchQuery,
      date,
      guests,
      isSelectedCity
    );
    setSearchObj(localSearchObj);
    setIsRedirectedFromHome(true);
  };
  
  useEffect(() => {
    if(isRedirectedFromHome && searchObj){
      history.push(`/search/${searchQuery}`);
    }
  }, [isRedirectedFromHome, searchObj]);

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className="search-terms">
        <div className="search-term">
          <div className="icon-header">
            <img src={location} alt="" />
            <h4>Location</h4>
          </div>
          <div className="term">
            <Searchtextbox
              setSearchQuery={setSearchQuery}
              setIsSelectedCity={setIsSelectedCity}
            />
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon-header">
            <img src={clock} alt="" />
            <h4>Date</h4>
          </div>
          <div className="term">
            <Datepicker setDate={setDate} />
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon-header">
            <img src={people} alt="" />
            <h4>Guests</h4>
          </div>
          <div className="term">
            <div className="guests-picker">
              <img
                src={minus}
                alt=""
                onClick={() =>
                  parseInt(guests) > 1 && setGuests(parseInt(guests) - 1)
                }
              />
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
              />
              <img
                src={plus}
                alt=""
                onClick={() => setGuests(parseInt(guests) + 1)}
              />
            </div>
          </div>
        </div>
      </div>
      <input type="submit" value="" className="search-btn" />
    </form>
  );
}
