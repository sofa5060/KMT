import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import Slider from '@mui/material/Slider';

export default function Pricefilter({ priceRange }) {
  const [open, setOpen] = useState(true);
  const [range, setRange] = React.useState(priceRange);

  const handleChange = (event, newValue) => {
    setRange(newValue);
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
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={range}
            onChange={handleChange}
            valueLabelDisplay="none"
            min={priceRange[0]}
            max={priceRange[1]}
            getAriaValueText={valuetext}
            valueLabelFormat={valuetext}
            disableSwap
            sx={{
              mx:1.5,
              maxWidth:0.9,
              [`&`]: {
                color: "#CA9841",
              },
            }}
          />
          <h4>${range[0]} - ${range[1]}</h4>
        </Collapse>
      </div>
    </div>
  );
}
