import React, { useState, useEffect, useContext } from "react";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import "./Trippricecard.css";
import Datepicker from "../SearchBox/Datepicker";
import Guestspicker from "../GuestsPicker/Guestspicker";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CheckoutContext } from "../../context/CheckoutContextProvider";
import { AlertContext } from "../../context/AlertContextProvider";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Trippricecard({ tripDetails }) {
  const history = useHistory();
  const [addOns, setAddOns] = useState(tripDetails.addOns || []);
  const [accommodations, setAccommodations] = useState(
    tripDetails.accommodations || []
  );
  const [trip, setTrip] = useState(tripDetails || "");
  const [date, setDate] = useState(dayjs());
  const [guests, setGuests] = useState(1);
  const [open, setOpen] = useState(true);
  const [pickedAccommodation, setPickedAccommodation] = useState(false);
  const matches = useMediaQuery("(min-width:900px)");
  const [totalPrice, setTotalPrice] = useState(0);
  const [oldTotalPrice, setOldTotalPrice] = useState(0);

  const calcTotal = () => {
    let total = trip.price;
    setPickedAccommodation(false);
    for (let i = 0; i < addOns.length; i++)
      if (addOns[i].checked) total += addOns[i].getPrice(guests);

    for (let i = 0; i < accommodations.length; i++)
      if (accommodations[i].checked) {
        setPickedAccommodation(true);
        total += accommodations[i].getPrice(guests);
      }
    return (total * guests).toFixed(2);
  };

  const calcOldTotal = () => {
    let total = trip.oldPrice || trip.price;
    for (let i = 0; i < addOns.length; i++)
      if (addOns[i].checked) total += addOns[i].getOldPrice(guests);

    for (let i = 0; i < accommodations.length; i++)
      if (accommodations[i].checked)
        total += accommodations[i].getOldPrice(guests);
    return (total * guests).toFixed(2);
  };

  const {
    startCheckout,
    tripId,
    contextAddOns,
    contextGuests,
    contextDate,
    contextAccommodations,
    lang,
  } = useContext(CheckoutContext);
  const { showAlert } = useContext(AlertContext);
  const { contextLanguage } = useContext(LanguageContext);

  const handleChange = (event) => {
    let addOn = addOns.find((addOn) => addOn.name === event.target.ariaLabel);
    addOn.checked = event.target.checked;
    setAddOns([...addOns]);
  };

  const handleAccommodationChange = (event) => {
    setAccommodations((prev) => {
      let temp = prev.map((accommodation) => {
        if (accommodation.name === parseInt(event.target.ariaLabel)) {
          accommodation.checked = event.target.checked;
        } else {
          accommodation.checked = false;
        }
        return accommodation;
      });
      return [...temp];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!open) {
      setOpen(true);
      return;
    }
    if (
      tripDetails.disabledDays &&
      tripDetails.disabledDays.includes(date.day())
    ) {
      showAlert("error", "This day is not available");
      return;
    }
    startCheckout(
      addOns,
      guests,
      date,
      totalPrice,
      trip.price,
      trip.id,
      accommodations,
      pickedAccommodation,
      trip[contextLanguage].title,
      trip.dayDuration,
      contextLanguage
    );
    history.push("/checkout");
  };

  // For adding addon
  useEffect(() => {
    if (addOns.length === 0) return;
    setTotalPrice(calcTotal());
    setOldTotalPrice(calcOldTotal());
  }, [addOns, guests, accommodations]);

  // For responsiveness
  useEffect(() => {
    setOpen(matches);
  }, [matches]);
  
  // for loading data from checkout context
  useEffect(() => {
    console.log("started");
    if (tripId && tripId === trip.id && lang === contextLanguage) {
      setAddOns(contextAddOns);
      setGuests(contextGuests);
      setDate(contextDate);
      setAccommodations(contextAccommodations);
    }
  }, []);

  return (
    <div className="price-card-container">
      <form className="price-card" onSubmit={handleSubmit}>
        {trip.oldPrice > 0 && (
          <div className="sale-banner">
            <h3>ON SALE</h3>
          </div>
        )}
        <div className="row">
          <div className="trip-price-header">
            <h2 className={trip.oldPrice > 0 && "shifted"}>
              {trip.dayDuration === 1
                ? "1 Day Trip"
                : `${trip.dayDuration} Days Trip`}
            </h2>
            <p>{trip.title}</p>
          </div>
          <div className="collapse-arrow" onClick={() => setOpen(!open)}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </div>
        </div>
        <Collapse
          in={open}
          timeout="auto"
          style={!matches && { maxHeight: "50dvh", overflow: "scroll" }}
        >
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
                  {addOn.getPrice(guests) > 0
                    ? "+" + addOn.getPrice(guests) + " USD"
                    : "Free"}
                  )
                </p>
              </div>
            ))}
          </div>
          {accommodations.length > 0 && (
            <div className="add-ons">
              <h4>Accommodation</h4>
              {accommodations.map((accommodation, index) => (
                <div className="add-on" key={index}>
                  <Checkbox
                    checked={accommodation.checked}
                    onChange={handleAccommodationChange}
                    inputProps={{ "aria-label": accommodation.name }}
                    sx={{
                      [`&, &.${checkboxClasses.checked}`]: {
                        color: "#CA9841",
                        maxWidth: 20,
                        maxHeight: 20,
                      },
                    }}
                  />
                  <p>
                    {accommodation.name} Stars Hotel (
                    {accommodation.getPrice(guests) > 0
                      ? "+" + accommodation.getPrice(guests) + " USD"
                      : "Free"}
                    )
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="booking-details">
            <Datepicker
              setDate={setDate}
              inputDate={date}
              label="Booking Date"
              disabledDays={trip.disabledDays}
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
              {totalPrice}
              <span>USD</span>
            </h2>
            {trip.oldPrice > 0 && (
              <h3>
                <span>Was</span>
                {oldTotalPrice} USD
              </h3>
            )}
          </div>
        </div>
        <button className="btn">Book Now</button>
      </form>
    </div>
  );
}
