import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";

export default function Searchtextbox({ setSearchQuery, value }) {
  const cities = ["Luxor", "Aswan", "Cairo", "Giza", "Alexandria"];
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e, newValue) => {
    setInputValue(newValue);
    setSearchQuery(newValue);
  };
  

  useEffect(() => {
    if(value !== undefined){
      setInputValue(value);
    }
  }, [value]);

  return (
    <Autocomplete
      freeSolo
      sx={{
        display: "inline-block",
        "& input": {
          minWidth: 120,
          width: 1,
          border: 0,
          outline: 0,
        },
      }}
      id="custom-input-demo"
      options={cities}
      onInputChange={handleChange}
      inputValue={inputValue}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            required
            type="text"
            placeholder="Where do you want to go?"
            {...params.inputProps}
          />
        </div>
      )}
    />
  );
}
