import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export default function AlertContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [msg, setMsg] = useState("");

  const showAlert = (type, msg) => {
    setOpen(true);
    setType(type);
    setMsg(msg);
  };

  const hideAlert = () => {
    setOpen(false);
  };

  return (
    <AlertContext.Provider value={{ open, type, msg, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
