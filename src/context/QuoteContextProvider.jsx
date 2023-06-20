import React, { createContext, useState, useContext } from "react";
import { AlertContext } from "./AlertContextProvider";
import axios from "axios";

export const QuoteContext = createContext();

export default function QuoteContextProvider({ children }) {
  const [contextFullName, setName] = useState("");
  const [contextEmail, setEmail] = useState("");
  const [contextMsg, setMsg] = useState("");

  const { showAlert } = useContext(AlertContext);

  const updateData = (name, email, msg) => {
    setName(name);
    setEmail(email);
    setMsg(msg);
  };

  const submitQuote = async (name, email, phoneNum, nationality, age, guests, checkInDate, checkOutDate, places, currency, budget, healthConditions, message) => {
    try{
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/quote`, {
        name,
        email,
        phoneNum,
        nationality,
        age,
        guests,
        checkInDate,
        checkOutDate,
        places,
        currency,
        budget,
        healthConditions,
        message
      });
    }catch(e){
      showAlert("error", "Something went wrong, please try again later");
      return false;
    }

    showAlert("success", "Your quote has been submitted successfully");
    setName("");
    setEmail("");
    setMsg("");
    return true;
  }

  return (
    <QuoteContext.Provider
      value={{ contextFullName, contextEmail, contextMsg, updateData, submitQuote }}
    >
      {children}
    </QuoteContext.Provider>
  );
}
