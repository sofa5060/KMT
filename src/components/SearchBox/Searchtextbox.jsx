import React, { useState, useEffect, useContext } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { SearchContext } from "../../context/SearchContextProvider";


export default function Searchtextbox({ setSearchQuery, value }) {
  const { contextCities } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState([]);

  const handleChange = (e, newValue) => {
    setInputValue(newValue);
    setSearchQuery(newValue);
  };
  

  useEffect(() => {
    if(value !== undefined){
      setInputValue(value);
    }
  }, [value]);

  useEffect(() => {
    if(contextCities.length > 0){
      setCities(contextCities.map((city) => city));
    }
  }, [contextCities]);

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
      options={cities.length ? cities : [""]}
      onInputChange={handleChange}
      inputValue={inputValue}
      getOptionDisabled={(option) => {
        if (option === "") return true;
        return false;
      }}
      getOptionLabel={(option) => option || ""}
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
