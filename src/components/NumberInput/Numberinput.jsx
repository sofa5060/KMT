import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export default function Numberinput({ setOuterNumber, label, defaultValue }) {
  const [number, setNumber] = useState(defaultValue || 1);

  useEffect(() => {
    if (parseInt(number) < 1 || (isNaN(number) && number !== "")) {
      setNumber(1);
      return;
    }

    setOuterNumber(parseInt(number));
  }, [number]);

  return (
    <TextField
      label={label}
      type="number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      onBlur={(e) => {
        if (e.target.value === "") setNumber(defaultValue || 1);
      }}
      required
      fullWidth
      min={1}
    />
  );
}
