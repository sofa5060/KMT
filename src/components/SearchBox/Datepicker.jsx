import React, {useState, useEffect} from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

export default function Datepicker({ setDate, inputDate }) {
  const [value, setValue] = useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
    setDate(newValue);
  };

  useEffect(() => {
    if(inputDate){
      setValue(inputDate);
    }
  }, [inputDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          maxWidth: 170,
          [`&`]: {
            color: "#CA9841",
          },
          svg: {
            color: "#CA9841",
          },
          
        }}
        value={value}
        minDate={dayjs()}
        onChange={(newValue) => handleChange(newValue)}
      />
    </LocalizationProvider>
  );
}
