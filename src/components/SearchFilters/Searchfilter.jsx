import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";

export default function Searchfilter({ filter }) {
  const [open, setOpen] = useState(true);
  const [filterProps, setFilterProps] = useState(filter.options);

  const handleChange = (event) => {
    filter.options.find(
      (option) => option.name === event.target.ariaLabel
    ).checked = event.target.checked;
    setFilterProps([...filter.options]);
  };

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
