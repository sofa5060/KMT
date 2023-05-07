import dayjs from "dayjs";
import React, { createContext, useState } from "react";

export const CheckoutContext = createContext();

export default function CheckoutContextProvider({ children }) {
  const [contextGuestsInfo, setContextGuestsInfo] = useState([]);
  const [contextAddOns, setAddOns] = useState([]);
  const [contextGuests, setGuests] = useState(1);
  const [contextDate, setDate] = useState(dayjs());
  const [totalPrice, setTotalPrice] = useState(0);
  const [tripPrice, setTripPrice] = useState(0);
  const [tripId, setTripId] = useState("");


  const startCheckout = (addOns, guests, date, total, tripPrice, tripId) => {
    setAddOns(addOns);
    setGuests(guests);
    setDate(date);
    setTotalPrice(total);
    setTripPrice(tripPrice);
    setTripId(tripId);
  }

  return (
    <CheckoutContext.Provider
      value={{ contextGuestsInfo, setContextGuestsInfo, startCheckout, contextAddOns, contextGuests, contextDate, totalPrice, tripPrice, tripId }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
