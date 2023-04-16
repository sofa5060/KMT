import React, {useEffect, useState, useContext} from 'react'
import location from "../../images/location.svg";
import clock from "../../images/clock.svg";
import people from "../../images/people.svg";
import Datepicker from "./Datepicker";
import minus from "../../images/minus 1.svg";
import plus from "../../images/plus 1.svg";
import dayjs from "dayjs";
import Searchtextbox from "./Searchtextbox";
import "./Searchbox.css";
import { SearchContext } from "../../context/SearchContextProvider";

export default function Searchpage_Searchbox() {
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState(dayjs());
  const [guests, setGuests] = useState(1);
  const [isSelectedCity, setIsSelectedCity] = useState(false);
  
  const {
    isRedirectedFromHome,
    setIsRedirectedFromHome,
    searchObj,
  } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO search for trips
  };

  useEffect(() => {
    console.log(searchObj)
    if (isRedirectedFromHome) {
      // Redirected from home page
      setSearchQuery(searchObj.searchQuery);
      setDate(searchObj.date);
      setGuests(searchObj.guests);
      if (searchObj.isSelectedCity) {
        setIsSelectedCity(true);
      }
      console.log("setted the data")
      //TODO Just search with the search object
    } else {
      //User entered from trips in navbar or show more destinations button
      //TODO search for all trips
    }
    setIsRedirectedFromHome(false);
  }, []);

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className="search-terms minimized">
        <div className="search-term">
          <div className="icon-header">
            <img src={location} alt="" />
          </div>
          <div className="term">
            <Searchtextbox
              setSearchQuery={setSearchQuery}
              setIsSelectedCity={setIsSelectedCity}
              value={searchQuery}
            />
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon-header">
            <img src={clock} alt="" />
          </div>
          <div className="term">
            <Datepicker setDate={setDate} inputDate={date}/>
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon-header">
            <img src={people} alt="" />
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
  )
}
