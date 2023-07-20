import React, { useContext, useState } from "react";
import "./Tripsummary.css";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import clock from "../../images/clock.svg";
import people from "../../images/people.svg";
import { CheckoutContext } from "../../context/CheckoutContextProvider";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Tripsummary({ RHR }) {
  const {
    contextAddOns,
    contextGuests,
    contextDate,
    tripPrice,
    contextAccommodations,
    pickedAccommodation,
    contextTripTitle,
    contextTripDuration,
  } = useContext(CheckoutContext);
  const { renderContent } = useContext(LanguageContext);
  return (
    <div className="trip-summary">
      <div className="title">
        <div className="title-data">
          <h3>{contextTripTitle}</h3>
          <p>
            {contextTripDuration > 1
              ? renderContent(
                  `${contextTripDuration} Days Trip`,
                  `Viaje de ${contextTripDuration} días`,
                  `Viagem de ${contextTripDuration} dias`
                )
              : renderContent(
                  "1 Day Trip",
                  "Viaje de 1 día",
                  "Viagem de 1 dia"
                )}{" "}
            - ({tripPrice} USD)
          </p>
        </div>
        <h5>x{contextGuests}</h5>
      </div>
      <div className="addOns">
        {contextAddOns.map((addOn) => {
          if (addOn.checked) {
            return (
              <div className="addOn">
                <p>
                  {addOn.name} ({addOn.getPrice(contextGuests)} USD)
                </p>
                <h5>x{contextGuests}</h5>
              </div>
            );
          }
        })}
      </div>
      {pickedAccommodation && (
        <React.Fragment>
          <hr />
          <h4>{renderContent("Accommodation", "Alojamiento", "Acomodação")}</h4>
          <div className="addOns">
            {contextAccommodations.map((accommodation) => {
              if (accommodation.checked) {
                return (
                  <div className="addOn">
                    <p>
                      {accommodation.name} Stars Hotel (
                      {accommodation.getPrice(contextGuests)} USD)
                    </p>
                    <h5>x{contextGuests}</h5>
                  </div>
                );
              }
            })}
          </div>
        </React.Fragment>
      )}
      {!RHR && <hr />}
      <div className="booking-details" style={{ marginTop: RHR && 32 }}>
        <div className="booking-detail">
          <img src={clock} alt="clock" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              value={contextDate}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              readOnly
            />
          </LocalizationProvider>
        </div>
        <div className="booking-detail">
          <img src={people} alt="people" />
          <p>
            {contextGuests} {renderContent("Guests", "Invitados", "Convidados")}
          </p>
        </div>
      </div>
    </div>
  );
}
