import dayjs from "dayjs";
import React, { createContext, useEffect, useState } from "react";

export const CheckoutContext = createContext();

export default function CheckoutContextProvider({ children }) {
  const [contextGuestsInfo, setContextGuestsInfo] = useState([]);
  const [contextAddOns, setAddOns] = useState([]);
  const [contextGuests, setGuests] = useState(1);
  const [contextDate, setDate] = useState(dayjs());
  const [contextAccommodations, setAccommodations] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tripPrice, setTripPrice] = useState(0);
  const [tripId, setTripId] = useState("");
  const [pickedAccommodation, setPickedAccommodation] = useState(false);
  const [contextTripTitle, setContextTripTitle] = useState("");
  const [contextTripDuration, setContextTripDuration] = useState(0);
  const [orderID, setOrderID] = useState("");
  const [lang, setLang] = useState("");
  const [englishAddOns, setEnglishAddOns] = useState([]);
  const [englishTitle, setEnglishTitle] = useState("");

  const startCheckout = (
    addOns,
    guests,
    date,
    total,
    tripPrice,
    tripId,
    accommodations,
    pickedAccommodation,
    tripTitle,
    tripDuration,
    lang,
    englishAddOns,
    englishTitle
  ) => {
    setAddOns(addOns);
    setGuests(guests);
    setDate(date);
    setTotalPrice(total);
    setTripPrice(tripPrice);
    setTripId(tripId);
    setAccommodations(accommodations);
    setPickedAccommodation(pickedAccommodation);
    setContextTripTitle(tripTitle);
    setContextTripDuration(tripDuration);
    setLang(lang);
    setEnglishAddOns(englishAddOns);
    setEnglishTitle(englishTitle);
  };

  const clearCheckoutContext = () => {
    setContextGuestsInfo([]);
    setAddOns([]);
    setGuests(1);
    setDate(dayjs());
    setTotalPrice(0);
    setTripPrice(0);
    setTripId("");
    setAccommodations([]);
    setPickedAccommodation(false);
    setContextTripTitle("");
    setContextTripDuration(0);
    setLang("");
    setEnglishAddOns([]);
    setEnglishTitle("");
  };

  useEffect(() => {
    console.log(englishAddOns);
  }, [englishAddOns]);

  return (
    <CheckoutContext.Provider
      value={{
        contextGuestsInfo,
        setContextGuestsInfo,
        startCheckout,
        contextAddOns,
        contextGuests,
        contextDate,
        totalPrice,
        tripPrice,
        tripId,
        contextAccommodations,
        pickedAccommodation,
        contextTripTitle,
        contextTripDuration,
        orderID,
        setOrderID,
        clearCheckoutContext,
        lang,
        englishAddOns,
        englishTitle,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
