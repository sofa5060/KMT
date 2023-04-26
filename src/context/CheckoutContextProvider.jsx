import React, { createContext, useState } from "react";

export const CheckoutContext = createContext();

export default function CheckoutContextProvider({ children }) {
  const [contextGuestsInfo, setContextGuestsInfo] = useState([]);

  return (
    <CheckoutContext.Provider
      value={{ contextGuestsInfo, setContextGuestsInfo }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
