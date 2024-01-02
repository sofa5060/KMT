import React, { useState, useEffect, useContext } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import Slider from "@mui/material/Slider";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Pricefilter({ priceRange, minPrice, maxPrice, setPriceRange }) {
  const [open, setOpen] = useState(true);
  const [range, setRange] = useState(priceRange);
  const { renderContent } = useContext(LanguageContext);

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  const handleCommit = (event, newValue) => {
    setPriceRange(newValue);
  };

  const valueText = (value) => {
    return `$${value}`;
  }

  useEffect(() => {
    if(range[0] < minPrice){
      setRange([minPrice, range[1]])
    }

    if(range[1] > maxPrice){
      setRange([range[0], maxPrice])
    }
  }, [minPrice, maxPrice, range]);

  useEffect(() => {
    if(priceRange[1] !== range[1])
      setRange(priceRange)
  }, [priceRange]);

  return (
    <div className="filter">
      <div className="filter-header" onClick={() => setOpen(!open)}>
        <h3>{renderContent("Price Range", "Rango de precios", "Faixa de preço")}</h3>
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
            min={minPrice}
            max={maxPrice}
            getAriaValueText={valueText}
            valueLabelFormat={valueText}
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
