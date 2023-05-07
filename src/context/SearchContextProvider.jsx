import React, { useState, useEffect, createContext, useContext } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { AlertContext } from "./AlertContextProvider";
import { useHistory } from "react-router-dom";


export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [contextSearchTerm, setSearchTerm] = useState("");
  const [contextDate, setDate] = useState(dayjs());
  const [contextGuests, setGuests] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(false);
  const [contextCities, setCities] = useState([]);

  const {showAlert} = useContext(AlertContext);

  const searchForTrip = async (term, date, count) => {
    setSearchTerm(term);
    setDate(date);
    setGuests(count);
    setIsSearched(true);
    setIsSearchResultsLoading(true);
    let res;
    try{
      res = await axios.get(`http://localhost:5000/api/trips/search?searchTerm=${term}&day=${dayjs(date).day()}&guests=${count}`);
    }catch(err){
      console.log(err);
      if(!err.response)
        showAlert("error", "Error searching for trips")
      setSearchResults([]);
      setIsSearchResultsLoading(false);
      return;
    }
    setSearchResults(res.data);
    setIsSearchResultsLoading(false);
    console.log(res);
  };

  useEffect(() => {
    const getCities = async () => {
      let res;
      try{
        res = await axios.get("http://localhost:5000/api/cities");
      }catch(err){
        console.log(err);
        setCities([]);
        return;
      }
      setCities(res.data);
      console.log(res);
    };
    getCities();
  }, []);

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
        isSearchResultsLoading,
        contextCities,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
