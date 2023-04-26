import React, { useState, useEffect } from "react";
import "./Guestspicker.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Guestspicker({ setGuestsCount, value }) {
  const [guests, setGuests] = useState(1);

  const incrementGuests = () => {
    setGuests(parseInt(guests) + 1);
    setGuestsCount(parseInt(guests) + 1);
  };

  const decrementGuests = () => {
    if (parseInt(guests) > 1) {
      setGuests(parseInt(guests) - 1);
      setGuestsCount(parseInt(guests) - 1);
    }
  };
  
  useEffect(() => {
    if (value !== undefined) {
      setGuests(value);
    }
  }, [value]);

  useEffect(() => {
    setGuestsCount(guests);
  }, [guests]);

  return (
    <div className="guests-picker">
      <RemoveIcon onClick={decrementGuests} />
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        onBlur={(e) => {
          if (e.target.value === "" || parseInt(e.target.value) < 1)
            setGuests(1);
        }}
        min="1"
      />
      <AddIcon onClick={incrementGuests} />
    </div>
  );
}
