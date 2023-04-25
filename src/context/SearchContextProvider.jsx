import React, { useState, useEffect, createContext } from "react";
import SearchQuery from "../models/SearchQuery";
import dayjs from "dayjs";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [searchObj, setSearchObj] = useState(null);
  const [isRedirectedFromOutside, setIsRedirectedFromOutside] = useState(false);

  const searchWithObj = (searchObj) => {
    console.log("searching with ");
    console.log(searchObj);
  }

  useEffect(() => {
    console.log(searchObj);
  },[searchObj]);

  return (
    <SearchContext.Provider value={{ setSearchObj, searchObj, searchWithObj, isRedirectedFromOutside, setIsRedirectedFromOutside}}>
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
