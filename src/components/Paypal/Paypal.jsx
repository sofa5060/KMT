import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useContext } from "react";
import "./Paypal.css";
import { CheckoutContext } from "../../context/CheckoutContextProvider";
import { AlertContext } from "../../context/AlertContextProvider";

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
    contextTripDuration
  } = useContext(CheckoutContext);
  const { showAlert } = useContext(AlertContext);
  const FUNDING_SOURCES = [FUNDING.PAYPAL, FUNDING.CARD];

  const initialOptions = {
    "client-id":
      "AWYyO_5o1iHI-u4LSCugL48d-vZkbL3wgDAn5VzgK8saIzdU6ItlrP3T9-BWP6wp1LvxlAgr8wUsyo81",
  };

  return (
    <div className="paypal">
      <PayPalScriptProvider options={initialOptions}>
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
                    "http://localhost:5000/api/create-order",
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
                    `http://localhost:5000/api/orders/${data.orderID}/capture`,
                    {
                      tripID: tripId,
                      tripPrice,
                      addOns: contextAddOns,
                      guests: contextGuests,
                      accommodations: contextAccommodations,
                      tripTitle: contextTripTitle,
                      guestsInfo: contextGuestsInfo,
                      reservationDate: contextDate,
                      tripDuration: contextTripDuration
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
                  console.error(error);
                  // Handle the error or display an appropriate error message to the user
                }
              }}
              onError={(err) => {
                showAlert(
                  "error",
                  "Something went wrong. Please try again later."
                );
              }}
            />
          );
        })}
      </PayPalScriptProvider>
    </div>
  );
}

export default Paypal;
