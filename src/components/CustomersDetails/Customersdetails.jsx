import React, { useState, useEffect, useContext } from "react";
import "./Customerdetails.css";
import { CheckoutContext } from "../../context/CheckoutContextProvider";

export default function Customersdetails({handleNext, handleBack}) {
  const [guestsInfo, setGuestsInfo] = useState([]);

  const { contextGuestsInfo } = useContext(CheckoutContext);

  useEffect(() => {
    if (contextGuestsInfo.length > 0) {
      setGuestsInfo(contextGuestsInfo);
    }
  }, [contextGuestsInfo]);

  if (guestsInfo.length === 0) return;

  return (
    <div className="customers-details">
      {guestsInfo.map((guest, index) => (
        <div className="customer-details">
          <h2>#{index + 1} Person Information</h2>
          <div className="information">
            <div className="information-col headers">
              <h3>Full Name:</h3>
              <h3>Email:</h3>
              {guest.phone && <h3>Phone Number:</h3>}
              <h3>Nationality:</h3>
              <h3>Age:</h3>
              {guest.msg && <h3>Special Request:</h3>}
            </div>
            <div className="information-col">
              <p>
                {guest.firstName} {guest.lastName}{" "}
              </p>
              <p>{guest.email}</p>
              {guest.phone && <p>{guest.phone}</p>}
              <p>{guest.nationality}</p>
              <p>{guest.age} Years Old</p>
              {guest.msg && <p>{guest.msg}</p>}
            </div>
          </div>
        </div>
      ))}
      <div className="btns">
        <button className="btn outlined" onClick={handleBack}>Back</button>
        <button className="btn" onClick={handleNext}>Proceed To Payment</button>
      </div>
    </div>
  );
}
