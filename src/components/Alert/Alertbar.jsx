import React, { useState, useContext } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { AlertContext } from "../../context/AlertContextProvider";

export default function Alertbar() {
  const { open, type, msg, hideAlert } = useContext(AlertContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    hideAlert();
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={type || "success"}
        sx={{ width: "100%" }}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
}
