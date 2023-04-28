import React, { useState, useContext, useEffect } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import Slider from "@mui/material/Slider";
import { SearchContext } from "../../context/SearchContextProvider";

export default function Pricefilter({ priceRange }) {
  const [open, setOpen] = useState(true);
  const [range, setRange] = useState(priceRange);

  const { searchObj, setSearchObj } = useContext(SearchContext);

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  const handleCommit = (event, newValue) => {
    const localSearchObj = searchObj.generateNewObj();
    localSearchObj.setPriceRange(newValue);
    setSearchObj(localSearchObj);
  };

  function valuetext(value) {
    return `$${value}`;
  }

  return (
    <div className="filter">
      <div className="filter-header" onClick={() => setOpen(!open)}>
        <h3>Price Range</h3>
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      <div className="filter-body" style={{ marginTop: open && 20 }}>
        <Collapse in={open} timeout="auto" unmountOnExit style={{padding: "0 10px"}}>
          <Slider
            getAriaLabel={() => "Price range"}
            value={range}
            onChange={handleChange}
            onChangeCommitted={handleCommit}
            valueLabelDisplay="auto"
            min={priceRange[0]}
            max={priceRange[1]}
            getAriaValueText={valuetext}
            valueLabelFormat={valuetext}
            disableSwap
            sx={{
              [`&`]: {
                color: "#CA9841",
              },
            }}
          />
          <h4>
            ${range[0]} - ${range[1]}
          </h4>
        </Collapse>
      </div>
    </div>
  );
}
