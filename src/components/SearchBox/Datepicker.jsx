import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

export default function Datepicker({ setDate, inputDate, label, min }) {
  const [value, setValue] = useState(inputDate || dayjs());

  const handleChange = (newValue) => {
    if (min && newValue < min) {
      setValue(min);
      setDate(min);
      return;
    }
    setValue(newValue);
    setDate(newValue);
  };

  useEffect(() => {
    if (min && value < min) {
      setValue(min);
    }
  }, [min]);

  useEffect(() => {
    if (inputDate !== undefined) {
      setValue(inputDate);
    }
  }, [inputDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          width: 1,
          [`&`]: {
            color: "#CA9841",
          },
          svg: {
            color: "#CA9841",
          },
        }}
        value={value}
        minDate={min || dayjs()}
        label={label || ""}
        onChange={(newValue) => handleChange(newValue)}
      />
    </LocalizationProvider>
  );
}
