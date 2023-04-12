import React, { useState } from "react";
import dayjs from "dayjs";
import Countrysearch from "./Countrysearch";
import "./Searchbox.css";
import location from "../../images/location.svg";
import clock from "../../images/clock.svg";
import people from "../../images/people.svg";
import Datepicker from "./Datepicker";
import minus from "../../images/minus 1.svg";
import plus from "../../images/plus 1.svg";

export default function Searchbox({ minimized }) {
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(dayjs());
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Country is" + country);
    console.log("Date is" + date);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className={minimized ? "search-terms minimized" : "search-terms"}>
        <div className="search-term">
          <div className="icon-header">
            <img src={location} alt="" />
            {!minimized && <h4>Location</h4>}
          </div>
          <div className="term">
            <Countrysearch setCountry={setCountry} />
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon-header">
            <img src={clock} alt="" />
            {!minimized && <h4>Date</h4>}
          </div>
          <div className="term">
            <Datepicker setDate={setDate} />
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon-header">
            <img src={people} alt="" />
            {!minimized && <h4>Guests</h4>}
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
