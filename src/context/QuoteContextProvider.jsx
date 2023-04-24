import React, { createContext, useState } from "react";

export const QuoteContext = createContext();

export default function QuoteContextProvider({ children }) {
  const [contextFullName, setName] = useState("");
  const [contextEmail, setEmail] = useState("");
  const [contextMsg, setMsg] = useState("");

  const updateData = (name, email, msg) => {
    setName(name);
    setEmail(email);
    setMsg(msg);
  };

  const submitQuote = (name, email, phoneNumber, nationality, age, guests, checkInDate, checkOutDate, places, currency, budget, healthConditions, msg) => {
    console.log(
      `full name: ${name} Email: ${email} phone: ${phoneNumber} Nationality: ${nationality}`
    );

    console.log(
      `Age: ${age} Guests: ${guests} Check In Date: ${checkInDate} Check Out Date: ${checkOutDate}`
    );

    console.log(
      `Places: ${places} Budget: ${budget} Currency: ${currency} Health Conditions: ${healthConditions}`
    );

    console.log(`Message: ${msg}`);
  }

  return (
    <QuoteContext.Provider
      value={{ contextFullName, contextEmail, contextMsg, updateData, submitQuote }}
    >
      {children}
    </QuoteContext.Provider>
  );
}
