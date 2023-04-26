import React, { useState } from "react";
import "./Tripsummary.css";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import clock from "../../images/clock.svg";
import people from "../../images/people.svg";

export default function Tripsummary({ RHR }) {
  const [value, setValue] = useState(dayjs());
  return (
    <div className="trip-summary">
      <div className="title">
        <div className="title-data">
          <h3>The Pyramids of Giza & Sphinx</h3>
          <p>1 Day Trip - (49.99 USD)</p>
        </div>
        <h5>x2</h5>
      </div>
      <div className="addOns">
        <div className="addOn">
          <p>Hotel Pickup (Free)</p>
          <h5>x2</h5>
        </div>
        <div className="addOn">
          <p>Professional Photographer (99.99 USD) </p>
          <h5>x2</h5>
        </div>
      </div>
      {!RHR && <hr />}
      <div className="booking-details">
        <div className="booking-detail">
          <img src={clock} alt="clock" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              value={value}
              onChange={(newValue) => setValue(newValue)}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              readOnly
            />
          </LocalizationProvider>
        </div>
        <div className="booking-detail">
          <img src={people} alt="people" />
          <p>2 Guests</p>
        </div>
      </div>
    </div>
  );
}
