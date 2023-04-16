import React, { useState, useEffect, createContext } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [isRedirectedFromHome, setIsRedirectedFromHome] = useState(false);
  const [searchObj, setSearchObj] = useState(null);

  return (
    <SearchContext.Provider value={{setIsRedirectedFromHome, isRedirectedFromHome, setSearchObj, searchObj}}>{props.children}</SearchContext.Provider>
  );
};
export default SearchContextProvider;
