import React from "react";
import Autocomplete from "@mui/material/Autocomplete";

export default function Countrysearch({ setCountry }) {
  const options = ["Option 1", "Option 2"];

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <Autocomplete
      sx={{
        display: "inline-block",
        "& input": {
          width: 175,
          border: 0
        },
      }}
      id="custom-input-demo"
      options={options}
      onInputChange={handleChange}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input type="text" placeholder="Where do you want to go?" {...params.inputProps} />
        </div>
      )}
    />
  );
}
