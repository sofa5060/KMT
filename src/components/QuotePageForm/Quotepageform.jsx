import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import "./Quotepageform.css";
import CountrySelect from "../CountrySelect/Countryselect";
import { useHistory } from "react-router-dom";
import Guestspicker from "../GuestsPicker/Guestspicker";
import Datepicker from "../SearchBox/Datepicker";
import dayjs from "dayjs";
import Budget from "../Budget/Budget";
import { QuoteContext } from "../../context/QuoteContextProvider";
import { AlertContext } from "../../context/AlertContextProvider";

export default function Quotepageform({ minimized }) {
  const history = useHistory();
  const { contextFullName, contextEmail, contextMsg, updateData, submitQuote } =
    useContext(QuoteContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+20");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");
  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs());
  const [minDate] = useState(dayjs());
  const [places, setPlaces] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [healthConditions, setHealthConditions] = useState("");
  const [msg, setMsg] = useState("");

  const { showAlert } = useContext(AlertContext);

  const validate = () => {
    let isValid = true;
    if (
      fullName === "" ||
      email === "" ||
      nationality === "" ||
      msg === "" ||
      guests < 1 ||
      currency === ""
    ) {
      isValid = false;
    }

    if (!matchIsValidTel(phone)) {
      isValid = false;
    }

    if (age === "" || age < 16) {
      isValid = false;
    }

    if (checkInDate.isAfter(checkOutDate)) {
      isValid = false;
    }

    if (budget === "" || budget < 1) {
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // In Home Page or in Trip Page
    if (minimized) {
      // TODO add data to context
      updateData(fullName, email, msg);
      history.push("/quote");
      return;
    }
    // In Quote Page
    if (!validate()) {
      // If not valid return
      showAlert("error", "Please fill all required fields correctly");
      return;
    }

    let success = await submitQuote(
      fullName,
      email,
      phone,
      nationality,
      age,
      guests,
      checkInDate,
      checkOutDate,
      places,
      currency,
      budget,
      healthConditions,
      msg
    );

    if (success) {
      setFullName("");
      setEmail("");
      setPhone("+20");
      setNationality("");
      setAge("");
      setGuests(1);
      setCheckInDate(dayjs());
      setCheckOutDate(dayjs());
      setPlaces("");
      setBudget("");
      setCurrency("USD");
      setHealthConditions("");
      setMsg("");
      history.push("/");
    }
  };

  // For getting data from context
  useEffect(() => {
    if (!minimized) {
      setFullName(contextFullName);
      setEmail(contextEmail);
      setMsg(contextMsg);
    }
  }, [contextFullName, contextEmail, contextMsg]);

  return (
    <form className="quote-page-form" onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        fullWidth
      />
      {!minimized && (
        <div className="quote-page-form ">
          <MuiTelInput
            value={phone}
            onChange={(newPhone) => setPhone(newPhone)}
            fullWidth
            error={!matchIsValidTel(phone) && phone !== "+20"}
            helperText={
              !matchIsValidTel(phone) && phone !== "+20"
                ? "Please enter a valid phone number"
                : ""
            }
          />
          <div className="row">
            <CountrySelect setNationality={setNationality} />
            <TextField
              label="Age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              error={(age < 16 || isNaN(parseInt(age))) && age !== ""}
              required
              fullWidth
              helperText={
                (age < 16 || isNaN(parseInt(age))) && age !== ""
                  ? "Age must be greater than 16"
                  : ""
              }
            />
          </div>
          <div className="input-field">
            <h4>How many are you?</h4>
            <Guestspicker setGuestsCount={setGuests} />
          </div>
          <div className="row">
            <Datepicker
              setDate={setCheckInDate}
              label="Check In"
              inputDate={checkInDate}
              min={minDate}
            />
            <Datepicker
              setDate={setCheckOutDate}
              label="Check Out"
              inputDate={checkOutDate}
              min={checkInDate}
              errorText={"Check Out Date must be after Check In Date"}
            />
          </div>
          <TextField
            label="Place you want to visit"
            required
            fullWidth
            value={places}
            onChange={(e) => setPlaces(e.target.value)}
          />
          <Budget setOuterBudget={setBudget} setOuterCurrency={setCurrency} />
          <TextField
            label="Any Health Condition?"
            fullWidth
            value={healthConditions}
            onChange={(e) => setHealthConditions(e.target.value)}
          />
        </div>
      )}
      <TextField
        label="Trip Plan & Additional Requests"
        multiline
        required
        fullWidth
        rows={4}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button className="btn">Request</button>
    </form>
  );
}
