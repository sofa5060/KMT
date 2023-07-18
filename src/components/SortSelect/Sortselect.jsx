import React, { useState, useEffect, useContext } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./Sortselect.css";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Sortselect({selectSort}) {
  const [sort, setSort] = useState("Top Destinations");
  const { renderContent } = useContext(LanguageContext);
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    selectSort(sort);
  }, [selectSort, sort]);

  return (
    <FormControl sx={{ minWidth: 180 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{renderContent("Sort By", "Ordenar por", "Ordenar por")}</InputLabel>
      <Select
        value={sort}
        onChange={handleChange}
        label={renderContent("Sort By", "Ordenar por", "Ordenar por")}
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        autoWidth
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
        <MenuItem value={"Top Destinations"}>{renderContent("Top Destinations", "Destinos más populares", "Destinos más populares")}</MenuItem>
        <MenuItem value={"Lowest Price"}>{renderContent("Lowest Price", "Precio más bajo", "Preço mais baixo")}</MenuItem>
        <MenuItem value={"Highest Price"}>{renderContent("Highest Price", "Precio más alto", "Preço mais alto")}</MenuItem>
      </Select>
    </FormControl>
  );
}
