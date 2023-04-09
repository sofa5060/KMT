import React, { useState, useEffect } from "react";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import "./Trippricecard.css";

export default function Trippricecard({ tripDetails }) {
  const [addOns, setAddOns] = useState([]);
  const [trip, setTrip] = useState("");

  const handleChange = (event) => {
    addOns.find((addOn) => addOn.name === event.target.ariaLabel).checked =
      event.target.checked;
    setAddOns([...addOns]);
  };

  useEffect(() => {
    if (!tripDetails) return;
    setAddOns(tripDetails.addOns);
    setTrip(tripDetails);
  }, [tripDetails]);

  return (
    <form className="price-card">
      {trip.discountedPrice > 0 && (
        <div className="sale-banner">
          <h3>ON SALE</h3>
        </div>
      )}
      <h2>{trip.duration === 1 ? "1 Day Trip" : `${trip.duration} Days Trip`}</h2>
      <p>{trip.title}</p>
      <div className="add-ons">
        {addOns.map((addOn, index) => (
          <div className="add-on" key={index}>
            <Checkbox
              checked={addOn.checked}
              onChange={handleChange}
              inputProps={{ "aria-label": addOn.name }}
              sx={{
                [`&, &.${checkboxClasses.checked}`]: {
                  color: "#CA9841",
                  maxWidth: 20,
                  maxHeight: 20,
                },
              }}
            />
            <p>
              {addOn.name} ({addOn.price > 0 ? addOn.price + " USD" : "Free"})
            </p>
          </div>
        ))}
      </div>
      <div className="price">
        <h4>From</h4>
        <div className="price-section">
          <h2>
            <span>$</span>{trip.discountedPrice > 0 ? trip.discountedPrice : trip.price}<span>USD</span>
          </h2>
          {trip.discountedPrice > 0 && (
            <h3>
              <span>Was</span>{trip.price} USD
            </h3>
          )}
        </div>
      </div>
      <button className="btn">Book Now</button>
    </form>
  );
}
