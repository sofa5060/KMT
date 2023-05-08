import React, { useState, useContext, useEffect } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";

export default function Searchfilter({
  filter,
  setFilteredMaxGroupSize,
  addToDestinations,
  removeFromDestinations,
  setAccommodation,
  addToDurations,
  removeFromDurations,
}) {
  const [open, setOpen] = useState(true);
  const [filterProps, setFilterProps] = useState(filter.options);

  const handleChange = (event) => {
    let selected = filterProps.find(
      (option) => option.name === event.target.ariaLabel
    );

    if (event.target.checked) {
      if (filter.name === "Group Size") {
        filter = filter.options.map((option) => (option.checked = false));
        let value = parseInt(selected.name.split(" ")[2]);
        setFilteredMaxGroupSize(value);
      } else if (filter.name === "Destinations") {
        addToDestinations(event.target.ariaLabel);
      } else if (filter.name === "Duration") {
        let min = parseInt(selected.name.split(" ")[0]);
        let max = parseInt(selected.name.split(" ")[2]);
        if (min === 1) max = 1;
        addToDurations(min, max);
      } else if (filter.name === "Accommodation") {
        filter = filter.options.map((option) => (option.checked = false));
        let value = parseInt(selected.name.split(" ")[0]);
        setAccommodation(value);
      }
    } else {
      if (filter.name === "Group Size") {
        filter = filter.options.map((option) => (option.checked = false));
        setFilteredMaxGroupSize(1);
      } else if (filter.name === "Destinations") {
        removeFromDestinations(event.target.ariaLabel);
      } else if (filter.name === "Duration") {
        let min = parseInt(selected.name.split(" ")[0]);
        let max = parseInt(selected.name.split(" ")[2]);
        if (min === 1) max = 1;
        removeFromDurations(min, max);
      } else if (filter.name === "Accommodation") {
        filter = filter.options.map((option) => (option.checked = false));
        setAccommodation(0);
      }
    }

    selected.checked = event.target.checked;
    setFilterProps(filterProps);
  };

  useEffect(() => {
    setFilterProps(filter.options);
  }, [filter]);

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
                inputProps={{
                  "aria-label": option.name,
                  "aria-valuetext": index,
                }}
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
