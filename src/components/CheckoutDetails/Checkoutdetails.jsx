import React, { useEffect, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import "./Checkoutdetails.css";
import Countryselect from "../CountrySelect/Countryselect";
import { CheckoutContext } from "../../context/CheckoutContextProvider";

export default function Checkoutdetails({ guests, handleNext }) {
  const [guestsInfo, setGuestsInfo] = useState([]);

  const { contextGuestsInfo, setContextGuestsInfo } =
    useContext(CheckoutContext);

  const handleChange = (e, i, fieldName) => {
    setGuestsInfo((prev) => {
      let temp = [...prev];
      temp[i] = { ...temp[i], [fieldName]: e.target.value };
      return temp;
    });
  };

  const setNationality = (e, i) => {
    setGuestsInfo((prev) => {
      let temp = [...prev];
      temp[i] = { ...temp[i], nationality: e };
      return temp;
    });
  };

  const setPhone = (e, i) => {
    e = `${e}`;
    setGuestsInfo((prev) => {
      let temp = [...prev];
      temp[i] = { ...temp[i], phone: e };
      return temp;
    });
  };

  const validate = () => {
    let isValid = true;
    for (let i = 0; i < guests; i++) {
      const guest = guestsInfo[i];
      if (!guest) return false;
      const { firstName, lastName, email, nationality, phone, age } = guest;

      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        nationality === "" ||
        age === "" ||
        age < 16 ||
        (phone && !matchIsValidTel(phone))
      ) {
        isValid = false;
        return isValid;
      }
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setContextGuestsInfo(guestsInfo);
    handleNext();
  };

  useEffect(() => {
    if (contextGuestsInfo.length === 0) return;
    setGuestsInfo(contextGuestsInfo);
  }, [contextGuestsInfo]);

  return (
    <form className="checkout-details" onSubmit={handleSubmit}>
      {Array.from(Array(guests)).map((e, i) => (
        <div className="person-details" key={i}>
          <h2>#{i + 1} Person Information</h2>
          <div className="row">
            <TextField
              value={
                guestsInfo[i] && guestsInfo[i].firstName
                  ? guestsInfo[i].firstName
                  : ""
              }
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              required
              onChange={(e) => handleChange(e, i, "firstName")}
              fullWidth
            />
            <TextField
              value={
                guestsInfo[i] && guestsInfo[i].lastName
                  ? guestsInfo[i].lastName
                  : ""
              }
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              required
              onChange={(e) => handleChange(e, i, "lastName")}
              fullWidth
            />
          </div>
          <TextField
            value={
              guestsInfo[i] && guestsInfo[i].email ? guestsInfo[i].email : ""
            }
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            required
            type="email"
            onChange={(e) => handleChange(e, i, "email")}
            fullWidth
          />
          {i === 0 && (
            <MuiTelInput
              value={
                guestsInfo[i] && guestsInfo[i].phone
                  ? guestsInfo[i].phone
                  : "+20"
              }
              onChange={(newPhone) => setPhone(newPhone, i)}
              fullWidth
              error={
                guestsInfo[i] &&
                guestsInfo[i].phone &&
                !matchIsValidTel(guestsInfo[i].phone)
              }
              helperText={
                guestsInfo[i] &&
                guestsInfo[i].phone &&
                !matchIsValidTel(guestsInfo[i].phone)
                  ? "Please enter a valid phone number"
                  : ""
              }
            />
          )}
          <div className="row">
            <Countryselect
              setNationality={(e) => setNationality(e, i)}
              inputNationality={guestsInfo[i] ? guestsInfo[i].nationality : null}
            />
            <TextField
              label="Age"
              type="number"
              value={guestsInfo[i] ? guestsInfo[i].age : ""}
              onChange={(e) => handleChange(e, i, "age")}
              error={
                guestsInfo[i] &&
                guestsInfo[i].age &&
                (guestsInfo[i].age < 16 || isNaN(parseInt(guestsInfo[i].age)))
              }
              required
              fullWidth
              helperText={
                guestsInfo[i] &&
                guestsInfo[i].age &&
                (guestsInfo[i].age < 16 || isNaN(parseInt(guestsInfo[i].age)))
                  ? "Age must be greater than 16"
                  : ""
              }
            />
          </div>
          <TextField
            label="Anything Special you would like us to consider (optional)"
            multiline
            fullWidth
            rows={3}
            value={guestsInfo[i] ? guestsInfo[i].msg : ""}
            onChange={(e) => handleChange(e, i, "msg")}
          />
        </div>
      ))}
      <button className="btn">Next</button>
    </form>
  );
}
