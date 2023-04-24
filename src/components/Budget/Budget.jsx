import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./Budget.css";
import TextField from "@mui/material/TextField";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
];

export default function Budget({ setOuterCurrency, setOuterBudget }) {
  const [currency, setCurrency] = useState("USD");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    setOuterCurrency(currency);
    setOuterBudget(budget);
  }, [currency, budget]);

  return (
    <div className="budget-input">
      <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value + " - " + option.label}
          </MenuItem>
        ))}
      </Select>
      <TextField
        label="Budget Per Person"
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        error={(budget < 1 || isNaN(parseInt(budget))) && budget !== ""}
        required
        fullWidth
        helperText={
          (budget < 1 || isNaN(parseInt(budget))) && budget !== ""
            ? "Budget Must be greater than 0"
            : ""
        }
      />
    </div>
  );
}
