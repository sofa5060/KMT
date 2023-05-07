import React, { useState, useEffect, createContext, useContext } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { AlertContext } from "./AlertContextProvider";
import { useHistory } from "react-router-dom";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [contextSearchTerm, setSearchTerm] = useState("");
  const [contextDate, setContextDate] = useState(dayjs());
  const [contextGuests, setContextGuests] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(false);
  const [isWaitingForSearch, setIsWaitingForSearch] = useState(false);
  const [contextCities, setCities] = useState([]);

  const { showAlert } = useContext(AlertContext);

  const searchForTrip = async (term, date, count) => {
    setSearchTerm(term);
    setContextDate(date);
    setContextGuests(count);
    setIsSearched(true);
    setIsSearchResultsLoading(true);
    console.log("searching for term", term, "and date ", date,"and the guests count", count);
    let res;
    try {
      res = await axios.get(
        `http://localhost:5000/api/trips/search?searchTerm=${term}&day=${dayjs(
          date
        ).day()}&guests=${count}`
      );
    } catch (err) {
      console.log(err);
      if (!err.response) showAlert("error", "Error searching for trips");
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
      try {
        res = await axios.get("http://localhost:5000/api/cities");
      } catch (err) {
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
        setContextDate,
        contextGuests,
        setContextGuests,
        searchForTrip,
        searchResults,
        isSearched,
        setIsSearched,
        isSearchResultsLoading,
        contextCities,
        isWaitingForSearch,
        setIsWaitingForSearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
