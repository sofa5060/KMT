import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";

export default function Searchtextbox({ setSearchQuery, setIsSelectedCity, value }) {
  const cities = ["Luxor", "Aswan", "Cairo", "Giza", "Alexandria"];
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e, newValue) => {
    if(cities.includes(newValue)){
      setIsSelectedCity(true);
    }else{
      setIsSelectedCity(false);
    }
    setInputValue(newValue);
    setSearchQuery(newValue);
  };
  

  useEffect(() => {
    if(value){
      setInputValue(value);
    }
  }, [value]);

  return (
    <Autocomplete
      freeSolo
      sx={{
        display: "inline-block",
        "& input": {
          width: 175,
          border: 0,
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
