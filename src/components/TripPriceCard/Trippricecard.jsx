import React, { useState, useEffect } from "react";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import "./Trippricecard.css";
import Datepicker from "../SearchBox/Datepicker";
import Guestspicker from "../GuestsPicker/Guestspicker";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Trippricecard({ tripDetails }) {
  const history = useHistory();
  const [addOns, setAddOns] = useState([]);
  const [trip, setTrip] = useState("");
  const [date, setDate] = useState(dayjs());
  const [guests, setGuests] = useState(1);
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [open, setOpen] = useState(true);
  const matches = useMediaQuery("(min-width:900px)");

  const handleChange = (event) => {
    let addOn = addOns.find((addOn) => addOn.name === event.target.ariaLabel);
    addOn.checked = event.target.checked;
    if (addOn.checked) {
      setAdditionalPrice(additionalPrice + addOn.price);
    } else {
      setAdditionalPrice(additionalPrice - addOn.price);
    }
    setAddOns([...addOns]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!open) {
      setOpen(true);
      return;
    }
    history.push("/checkout");
  };

  useEffect(() => {
    if (!tripDetails) return;
    setAddOns(tripDetails.addOns);
    setTrip(tripDetails);
  }, [tripDetails]);

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  return (
    <div className="price-card-container">
      <form className="price-card" onSubmit={handleSubmit}>
        {trip.discountedPrice > 0 && (
          <div className="sale-banner">
            <h3>ON SALE</h3>
          </div>
        )}
        <div className="row">
          <div className="trip-price-header">
            <h2 className={trip.discountedPrice > 0 && "shifted"}>
              {trip.duration === 1
                ? "1 Day Trip"
                : `${trip.duration} Days Trip`}
            </h2>
            <p>{trip.title}</p>
          </div>
          <div className="collapse-arrow" onClick={() => setOpen(!open)}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </div>
        </div>
        <Collapse in={open} timeout="auto" style={ !matches && {maxHeight: "50dvh", overflow: "scroll"}}>
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
                  {addOn.name} (
                  {addOn.price > 0 ? addOn.price + " USD" : "Free"})
                </p>
              </div>
            ))}
          </div>
          <div className="booking-details">
            <Datepicker
              setDate={setDate}
              inputDate={date}
              label="Booking Date"
            />
            <div className="input-field">
              <h4>How many are you?</h4>
              <Guestspicker setGuestsCount={setGuests} value={guests} />
            </div>
          </div>
          <hr />
        </Collapse>

        <div className="price">
          <h4>From</h4>
          <div className="price-section">
            <h2>
              <span>$</span>
              {trip.discountedPrice > 0
                ? (trip.discountedPrice + additionalPrice) * guests
                : (trip.price + additionalPrice) * guests}
              <span>USD</span>
            </h2>
            {trip.discountedPrice > 0 && (
              <h3>
                <span>Was</span>
                {(trip.price + additionalPrice) * guests} USD
              </h3>
            )}
          </div>
        </div>
        <button className="btn">Book Now</button>
      </form>
    </div>
  );
}
