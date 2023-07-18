import React, { useState, useEffect, useContext } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { SearchContext } from "../../context/SearchContextProvider";
import { LanguageContext } from "../../context/LanguageContextProvider";


export default function Searchtextbox({ setSearchQuery, value }) {
  const { contextCities } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState([]);
  const { renderContent } = useContext(LanguageContext);

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
            placeholder={renderContent("Where do you want to go?", "¿A dónde quieres ir?", "Para onde você quer ir?")}
            {...params.inputProps}
          />
        </div>
      )}
    />
  );
}
