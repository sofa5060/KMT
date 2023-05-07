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
import Customersdetails from "../../components/CustomersDetails/Customersdetails";
import Messagepage from "../../components/MessagePage/Messagepage";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";

const steps = ["Your Details", "Summary", "Payment", "Confirmation"];

export default function Checkoutpage({ setCurrPage }) {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(true);

  const matches = useMediaQuery("(min-width:1000px)");
  const matches2 = useMediaQuery("(max-width:600px)");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setCurrPage("");
  }, [setCurrPage]);

  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  return (
    <div className="checkout-page">
      <div className="left">
        <Stepper activeStep={activeStep} alternativeLabel={matches2}>
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
            {activeStep === 0 && (
              <Checkoutdetails guests={2} handleNext={handleNext} />
            )}
            {activeStep === 1 && (
              <React.Fragment>
                <Tripsummary RHR />
                <Customersdetails
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              </React.Fragment>
            )}
            {activeStep === 2 && (
              <React.Fragment>
                <h1>Here You are Paying</h1>
                <div className="btn" onClick={handleBack}>
                  Back
                </div>
                <div className="btn" onClick={handleNext}>
                  Next
                </div>
              </React.Fragment>
            )}
            {activeStep === 3 && <Messagepage type="paymentSuccess" />}
          </div>
        </div>
      </div>
      {(activeStep === 0 || activeStep === 1) && (
        <div className="right">
          <div className="container-padding">
            <div className="container">
              <div className="expand" onClick={() => setOpen(!open)}>
                <h3>The Pyramids of Giza & Sphinx </h3>
                {open ? <ExpandLess /> : <ExpandMore />}
              </div>
              <Collapse in={open} timeout="auto" className="collapse">
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
              </Collapse>

              <div className="price-section">
                <h2>
                  <span>$</span>299.97<span>USD</span>
                </h2>
              </div>
              {activeStep === 1 && (
                <button className="btn" onClick={handleNext}>
                  Proceed To Payment
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
