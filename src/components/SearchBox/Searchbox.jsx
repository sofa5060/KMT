import React, { useState } from "react";
import Countrysearch from "./Countrysearch";
import "./Searchbox.css";
import location from "../../images/location.svg";
import clock from "../../images/clock.svg";
import people from "../../images/people.svg";
import Datepicker from "./Datepicker";
import minus from '../../images/minus 1.svg'
import plus from '../../images/plus 1.svg'

export default function Searchbox() {
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Country is" + country);
    console.log("Date is" + date);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className="search-terms">
        <div className="search-term">
          <div className="icon">
            <img src={location} alt="" />
          </div>
          <div className="term">
            <h4>Location</h4>
            <Countrysearch setCountry={setCountry}/>
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon">
            <img src={clock} alt="" />
          </div>
          <div className="term">
            <h4>Date</h4>
            <Datepicker setDate={setDate}/>
          </div>
        </div>
        <hr />
        <div className="search-term">
          <div className="icon">
            <img src={people} alt="" />
          </div>
          <div className="term">
            <h4>Guests</h4>
            <div className="guests-picker">
              <img src={minus} alt="" onClick={() => guests > 1 && setGuests(guests - 1)}/>
              <input type="number" value={guests} onChange={e => setGuests(e.target.value)} min="1"/>
              <img src={plus} alt="" onClick={() => setGuests(guests + 1)}/>
            </div>
          </div>
        </div>
      </div>
      <input type="submit" value="" className="search-btn" />
    </form>
  );
}
