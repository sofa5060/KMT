import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./Sortselect.css";

export default function Sortselect({selectSort}) {
  const [sort, setSort] = useState("A-Z");
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    selectSort(sort);
  }, [selectSort, sort]);

  return (
    <FormControl sx={{ minWidth: 150 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Sort By</InputLabel>
      <Select
        value={sort}
        onChange={handleChange}
        label="Sort By"
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        sx={{
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#ca9841",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ca9841",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ca9841",
          },
          ".MuiSvgIcon-root ": {
            fill: "#ca9841 !important",
          },
        }}
      >
        <MenuItem value={"A-Z"} default>
          A to Z
        </MenuItem>
        <MenuItem value={"Z-A"} default>
          Z to A
        </MenuItem>
        <MenuItem value={"Most Relevant"}>Most Relevant</MenuItem>
        <MenuItem value={"Most Selling"}>Most Selling</MenuItem>
        <MenuItem value={"Lowest Price"}>Lowest Price</MenuItem>
        <MenuItem value={"Highest Price"}>Highest Price</MenuItem>
      </Select>
    </FormControl>
  );
}
