import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useContext } from "react";
import "./Paypal.css";
import { CheckoutContext } from "../../context/CheckoutContextProvider";
import { AlertContext } from "../../context/AlertContextProvider";
import { CircularProgress } from "@mui/material";

const Wrapper = ({
  FUNDING_SOURCES,
  totalPrice,
  tripPrice,
  contextAddOns,
  contextGuests,
  contextAccommodations,
  setOrderID,
  finishCheckout,
  showAlert,
  tripId,
  contextTripTitle,
  contextGuestsInfo,
  contextDate,
  contextTripDuration,
  clearCheckoutContext,
}) => {
  const [{ isPending }] = usePayPalScriptReducer();

  if (isPending)
    return (
      <div className="container">
        <CircularProgress />
      </div>
    );

  return (
    <div className="wrapper">
      {FUNDING_SOURCES.map((fundingSource) => {
        return (
          <PayPalButtons
            fundingSource={fundingSource}
            key={fundingSource}
            no
            style={{
              layout: "vertical",
              shape: "rect",
              gap: "10px",
            }}
            createOrder={async (data, actions) => {
              try {
                const response = await axios.post(
                  `${process.env.REACT_APP_BACKEND_URL}/api/create-order`,
                  {
                    price: totalPrice,
                    orderDetails: {
                      tripPrice,
                      contextAddOns,
                      contextGuests,
                      contextAccommodations,
                    },
                  }
                );

                const details = await response.data;
                return details.id;
              } catch (error) {
                showAlert(
                  "error",
                  "Something went wrong. Please try again later."
                );
                // Handle the error or display an appropriate error message to the user
              }
            }}
            onApprove={async (data, actions) => {
              try {
                const response = await axios.post(
                  `${process.env.REACT_APP_BACKEND_URL}/api/orders/${data.orderID}/capture`,
                  {
                    tripID: tripId,
                    tripPrice,
                    addOns: contextAddOns,
                    guests: contextGuests,
                    accommodations: contextAccommodations,
                    tripTitle: contextTripTitle,
                    guestsInfo: contextGuestsInfo,
                    reservationDate: contextDate,
                    tripDuration: contextTripDuration,
                  }
                );
                const details = await response.data;
                // Three cases to handle:
                //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                //   (2) Other non-recoverable errors -> Show a failure message
                //   (3) Successful transaction -> Show confirmation or thank you message

                // This example reads a v2/checkout/orders capture response, propagated from the server
                // You could use a different API or structure for your 'orderData'
                const errorDetail =
                  Array.isArray(details.details) && details.details[0];

                if (
                  errorDetail &&
                  errorDetail.issue === "INSTRUMENT_DECLINED"
                ) {
                  showAlert("error", "Something went wrong. Please try again.");
                  return actions.restart();
                  // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                }

                if (errorDetail) {
                  let msg = "Sorry, your transaction could not be processed.";
                  msg += errorDetail.description
                    ? " " + errorDetail.description
                    : "";
                  showAlert("error", msg);
                }

                const transaction =
                  details.purchase_units[0].payments.captures[0];
                if (transaction.status === "COMPLETED") {
                  setOrderID(data.orderID);
                  finishCheckout();
                  showAlert("success", "Payment Successful");
                  clearCheckoutContext();
                }
              } catch (error) {
                showAlert(
                  "error",
                  "Something went wrong. Please try again"
                );
              }
            }}
            onError={(err) => {
              showAlert(
                "error",
                "Something went wrong. Please try again"
              );
            }}
          />
        );
      })}
    </div>
  );
};

function Paypal({ finishCheckout }) {
  const {
    totalPrice,
    tripPrice,
    contextAddOns,
    contextGuests,
    contextAccommodations,
    setOrderID,
    tripId,
    contextTripTitle,
    contextGuestsInfo,
    contextDate,
    clearCheckoutContext,
    contextTripDuration,
  } = useContext(CheckoutContext);
  const { showAlert } = useContext(AlertContext);
  const FUNDING_SOURCES = [FUNDING.PAYPAL, FUNDING.CARD];

  const initialOptions = {
    "client-id":
      `${process.env.REACT_APP_PAYPAL_CLIENT_ID}`,
  };

  return (
    <div className="paypal">
      <PayPalScriptProvider options={initialOptions}>
        <Wrapper
          FUNDING_SOURCES={FUNDING_SOURCES}
          totalPrice={totalPrice}
          tripPrice={tripPrice}
          contextAddOns={contextAddOns}
          contextGuests={contextGuests}
          contextAccommodations={contextAccommodations}
          setOrderID={setOrderID}
          finishCheckout={finishCheckout}
          showAlert={showAlert}
          tripId={tripId}
          contextTripTitle={contextTripTitle}
          contextGuestsInfo={contextGuestsInfo}
          contextDate={contextDate}
          contextTripDuration={contextTripDuration}
          clearCheckoutContext={clearCheckoutContext}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Paypal;
