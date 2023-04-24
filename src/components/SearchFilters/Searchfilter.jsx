import React, { useState, useContext, useEffect } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import { SearchContext } from "../../context/SearchContextProvider";

export default function Searchfilter({ filter }) {
  const [open, setOpen] = useState(true);
  const [filterProps, setFilterProps] = useState(filter.options);
  const { searchObj, setSearchObj } = useContext(SearchContext);

  const handleChange = (event) => {
    filter.options.find(
      (option) => option.name === event.target.ariaLabel
    ).checked = event.target.checked;
    setFilterProps([...filter.options]);

    if (event.target.checked) {
      if (filter.name === "Destinations") {
        searchObj.addDestination(event.target.ariaLabel);
      } else if (filter.name === "Duration") {
        if (event.target.ariaLabel[0] === "1")
          searchObj.addToDurations([
            parseInt(event.target.ariaLabel[0]),
            parseInt(event.target.ariaLabel[0]),
          ]);
        else
          searchObj.addToDurations([
            parseInt(event.target.ariaLabel[0]),
            parseInt(event.target.ariaLabel[2]),
          ]);
      } else if (filter.name === "Rating") {
        searchObj.addToRatings(parseInt(event.target.ariaLabel[0]));
      }
    } else {
      if (filter.name === "Destinations") {
        searchObj.removeDestination(event.target.ariaLabel);
      } else if (filter.name === "Duration") {
        if (event.target.ariaLabel[0] === "1")
          searchObj.removeFromDurations([
            parseInt(event.target.ariaLabel[0]),
            parseInt(event.target.ariaLabel[0]),
          ]);
        else
          searchObj.removeFromDurations([
            parseInt(event.target.ariaLabel[0]),
            parseInt(event.target.ariaLabel[2]),
          ]);
      } else if (filter.name === "Rating") {
        searchObj.removeFromRatings(parseInt(event.target.ariaLabel[0]));
      }
    }
    setSearchObj(searchObj);
  };

  useEffect(() => {
    console.log(searchObj);
  }, [searchObj]);

  return (
    <div className="filter">
      <div className="filter-header" onClick={() => setOpen(!open)}>
        <h3>{filter.name}</h3>
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      <div className="filter-body" style={{ marginTop: open && 20 }}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {filterProps.map((option, index) => (
            <div className="option" key={index}>
              <Checkbox
                checked={option.checked}
                onChange={handleChange}
                inputProps={{ "aria-label": option.name }}
                sx={{
                  [`&, &.${checkboxClasses.checked}`]: {
                    color: "#CA9841",
                    maxWidth: 20,
                    maxHeight: 20,
                  },
                }}
              />
              <p>{option.name}</p>
            </div>
          ))}
        </Collapse>
      </div>
    </div>
  );
}
