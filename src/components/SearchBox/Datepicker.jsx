import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

const nearestAvailableDate = (date, disabled) => {
  console.log(disabled);
  let day = date.day();
  let diff = 0;
  while (disabled.includes(day)) {
    day = (day + 1) % 7;
    diff++;
  }
  console.log(date.add(diff, "day").day());
  return date.add(diff, "day");
};

export default function Datepicker({
  setDate,
  inputDate,
  label,
  min,
  disabledDays,
}) {
  const [value, setValue] = useState(
    nearestAvailableDate(inputDate || dayjs(), disabledDays || [])
  );

  const handleChange = (newValue) => {
    if (min && newValue < min) {
      setValue(nearestAvailableDate(min, disabledDays || []));
      setDate(nearestAvailableDate(min, disabledDays || []));
      return;
    }
    setValue(nearestAvailableDate(newValue, disabledDays || []));
    setDate(nearestAvailableDate(newValue, disabledDays || []));
  };

  useEffect(() => {
    if (min && value < min) {
      setValue(nearestAvailableDate(min, disabledDays || []));
    }
  }, [min]);

  useEffect(() => {
    if (inputDate !== undefined) {
      setValue(nearestAvailableDate(inputDate, disabledDays || []));
    }
  }, [inputDate]);

  const disableDay = (date) => {
    return disabledDays && disabledDays.includes(dayjs(date).day());
  };

  useEffect(() => {
    if(disabledDays && disabledDays.includes(value.day())) {
      setValue(nearestAvailableDate(value, disabledDays || []));
      setDate(nearestAvailableDate(value, disabledDays || []));
    }
  }, [value, disabledDays]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          width: 1,
          minWidth: 170,
          [`&`]: {
            color: "#CA9841",
          },
          svg: {
            color: "#CA9841",
          },
        }}
        value={value}
        minDate={min || nearestAvailableDate(dayjs(), disabledDays || [])}
        label={label || ""}
        onChange={(newValue) => handleChange(newValue)}
        shouldDisableDate={disableDay}
      />
    </LocalizationProvider>
  );
}
