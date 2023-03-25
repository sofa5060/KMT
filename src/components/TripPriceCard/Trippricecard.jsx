import React, { useState } from "react";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import "./Trippricecard.css";

export default function Trippricecard(props) {
  const [addOns, setAddOns] = useState(props.addOns);

  const handleChange = (event) => {
    addOns.find((addOn) => addOn.name === event.target.ariaLabel).checked =
      event.target.checked;
    setAddOns([...addOns]);
  };

  return (
    <form className="price-card">
      <div className="sale-banner">
        <h3>ON SALE</h3>
      </div>
      <h2>1 Day Trip</h2>
      <p>The Pyramids of Giza & Sphinx</p>
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
            <span>$</span>49.99<span>USD</span>
          </h2>
          <h3><span>Was</span>99.99 USD</h3>
        </div>
      </div>
      <button className="btn">Book Now</button>
    </form>
  );
}
