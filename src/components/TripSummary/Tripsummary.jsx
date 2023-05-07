import React, { useContext, useState } from "react";
import "./Tripsummary.css";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import clock from "../../images/clock.svg";
import people from "../../images/people.svg";
import { CheckoutContext } from "../../context/CheckoutContextProvider";

export default function Tripsummary({ RHR }) {
  const { contextAddOns, contextGuests, contextDate, tripPrice } = useContext(CheckoutContext);
  return (
    <div className="trip-summary">
      <div className="title">
        <div className="title-data">
          <h3>The Pyramids of Giza & Sphinx</h3>
          <p>1 Day Trip - ({tripPrice} USD)</p>
        </div>
        <h5>x{contextGuests}</h5>
      </div>
      <div className="addOns">
        {contextAddOns.map((addOn) => {
          if (addOn.checked) {
            return (
              <div className="addOn">
                <p>
                  {addOn.name} ({addOn.getPrice(contextGuests)} USD)
                </p>
                <h5>x{contextGuests}</h5>
              </div>
            );
          }
        })}
      </div>
      {!RHR && <hr />}
      <div className="booking-details" style={{ marginTop: RHR && 32 }}>
        <div className="booking-detail">
          <img src={clock} alt="clock" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              value={contextDate}
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
          <p>{contextGuests} Guests</p>
        </div>
      </div>
    </div>
  );
}
