import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Checkoutpage.css";
import Checkoutdetails from "../../components/CheckoutDetails/Checkoutdetails";
import Tripsummary from "../../components/TripSummary/Tripsummary";
import { Link } from "react-router-dom";
import Customersdetails from "../../components/CustomersDetails/Customersdetails";
import Messagepage from "../../components/MessagePage/Messagepage";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CheckoutContext } from "../../context/CheckoutContextProvider";
import Paypal from "../../components/Paypal/Paypal";
import { LanguageContext } from "../../context/LanguageContextProvider";
import { getAnalytics, logEvent } from "firebase/analytics";
const { useHistory } = require("react-router-dom");

const steps = {
  EN: ["Your Details", "Summary", "Payment", "Confirmation"],
  ES: ["Tus datos", "Resumen", "Pago", "Confirmación"],
  PT: ["Seus dados", "Resumo", "Pagamento", "Confirmação"],
};

export default function Checkoutpage({ setCurrPage }) {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const history = useHistory();

  const analytics = getAnalytics();

  const { contextGuests, totalPrice, tripId, orderID, englishTitle } =
    useContext(CheckoutContext);
  const { renderContent, contextLanguage } = useContext(LanguageContext);

  const matches = useMediaQuery("(min-width:1000px)");
  const matches2 = useMediaQuery("(max-width:600px)");

  const finishCheckout = () => {
    const item = {
      item_id: tripId,
      item_name: englishTitle,
    };

    const orderItem = {
      trip_title: englishTitle,
      value: totalPrice,
      currency: "USD",
      transaction_id: orderID,
      items: [item],
    };

    // Log event
    logEvent(analytics, "purchase", orderItem);

    setActiveStep(3);
    setIsDisabled(true);
    window.scrollTo(0, 0);
  };

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
    setOpen(matches);
  }, [matches]);

  useEffect(() => {
    if (tripId === "") {
      history.push("/");
    }
  }, []);

  return (
    <div className="checkout-page">
      <div className="left">
        <Stepper activeStep={activeStep} alternativeLabel={matches2}>
          {steps[contextLanguage].map((label, index) => {
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
              <Checkoutdetails guests={contextGuests} handleNext={handleNext} />
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
                <h1>
                  {renderContent(
                    "Choose Your Payment Method",
                    "Elige tu método de pago",
                    "Escolha seu método de pagamento"
                  )}
                </h1>
                <Paypal finishCheckout={finishCheckout} />
                <div
                  className="btn"
                  onClick={isDisabled ? () => {} : handleBack}
                >
                  {renderContent("Back", "Atrás", "Voltar")}
                </div>
              </React.Fragment>
            )}
            {activeStep === 3 && (
              <Messagepage type="paymentSuccess" orderID={orderID} />
            )}
          </div>
        </div>
      </div>
      {(activeStep === 0 || activeStep === 1) && (
        <div className="right">
          <div className="container-padding">
            <div className="container-custom">
              <div className="expand" onClick={() => setOpen(!open)}>
                <h3>The Pyramids of Giza & Sphinx </h3>
                {open ? <ExpandLess /> : <ExpandMore />}
              </div>
              <Collapse in={open} timeout="auto" className="collapse-custom">
                <div className="container-header !text-black">
                  {activeStep === 0 ? (
                    <React.Fragment>
                      <h3>{renderContent("Summary", "Resumen", "Resumo")}</h3>
                      <Link to={`/trip/${tripId}`}>
                        {renderContent("EDIT", "EDITAR", "EDITAR")}
                      </Link>
                    </React.Fragment>
                  ) : (
                    <h3>
                      {renderContent(
                        "Total to pay",
                        "Total a pagar",
                        "Total a pagar"
                      )}
                    </h3>
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
                  <span>$</span>
                  {totalPrice}
                  <span>USD</span>
                </h2>
              </div>
              {activeStep === 1 && (
                <button className="btn" onClick={handleNext}>
                  {renderContent(
                    "Proceed To Payment",
                    "Proceder al pago",
                    "Proceder ao pagamento"
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
