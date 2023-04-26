import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import "./Checkoutpage.css";
import Checkoutdetails from "../../components/CheckoutDetails/Checkoutdetails";
import Tripsummary from "../../components/TripSummary/Tripsummary";
import { Link } from "react-router-dom";

const steps = ["Your Details", "Summary", "Payment", "Confirmation"];

export default function Checkoutpage({ setCurrPage }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    setCurrPage("");
  }, [setCurrPage]);

  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

  return (
    <div className="checkout-page">
      <div className="left">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className="btns">
          <div className="displayed-element">
            <Checkoutdetails guests={2} handleNext={handleNext} />
          </div>
        </div>
      </div>
      {(activeStep === 0 || activeStep === 1) && (
        <div className="right">
          <div className="container">
            <div className="container-header">
              {activeStep === 0 ? (
                <React.Fragment>
                  <h3>Summary</h3>
                  <Link to="/">EDIT</Link>
                </React.Fragment>
              ) : (
                <h3>Total to pay</h3>
              )}
            </div>
            {activeStep === 0 && (
              <React.Fragment>
                <Tripsummary />
                <hr />
              </React.Fragment>
            )}
            <div className="price-section">
              <h2>
                <span>$</span>299.97<span>USD</span>
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
