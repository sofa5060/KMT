import React, { useState, useEffect, createContext, useContext } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { AlertContext } from "./AlertContextProvider";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [contextSearchTerm, setSearchTerm] = useState("");
  const [contextDate, setDate] = useState(dayjs());
  const [contextGuests, setGuests] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const {showAlert} = useContext(AlertContext);

  const searchForTrip = async (term, date, count) => {
    setSearchTerm(term);
    setDate(date);
    setGuests(count);
    setIsSearched(true);
    let res;
    try{
      res = await axios.get(`http://localhost:5000/api/trips/search?searchTerm=${term}&day=${dayjs(date).day()}&guests=${count}`);
    }catch(err){
      console.log(err);
      if(err.status !== 404)
        showAlert("error", "Error searching for trips")
      return;
    }
    setSearchResults(res.data);
    console.log(res);
  };

  return (
    <SearchContext.Provider
      value={{
        contextSearchTerm,
        contextDate,
        contextGuests,
        searchForTrip,
        searchResults,
        isSearched,
        setIsSearched,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
