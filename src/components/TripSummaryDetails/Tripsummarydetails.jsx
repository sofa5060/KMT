import React, { useContext } from "react";
import "./Tripsummarydetails.css";
import world from "../../images/world.svg";
import sunrise from "../../images/sunrise.svg";
import location from "../../images/location2.svg";
import clock from "../../images/clock2.svg";
import people from "../../images/people2.svg";
import dayjs from "dayjs";
import { LanguageContext } from "../../context/LanguageContextProvider";

// TODO load the data from the trip object
export default function Tripsummarydetails({ trip }) {
  const { renderContent } = useContext(LanguageContext);
  return (
    <div className="trip-summary-details">
      {trip.hotelPickup && (
        <div className="detail">
          <img src={location} alt="" />
          <p>
            {renderContent(
              "Hotel Pickup",
              "Recogida en el hotel",
              "Coleta no hotel"
            )}
          </p>
          <h3>{renderContent("Available", "Disponible", "Disponível")}</h3>
        </div>
      )}
      <div className="detail">
        <img src={sunrise} alt="" />
        <p>
          {renderContent("Start From", "Comienza desde", "Começa a partir de")}
        </p>
        <h3>
          {trip.startTime
            ? dayjs(trip.startTime, "HH:mm").format("LT")
            : "9 AM"}
        </h3>
      </div>
      <div className="detail">
        <img src={clock} alt="" />
        <p>{renderContent("Duration", "Duración", "Duración")}</p>
        <h3>
          {trip.dayDuration > 0 && renderContent(`${trip.dayDuration} Day(s) `, `${trip.dayDuration} Día(s) `, `${trip.dayDuration} Dia(s) `)}
          {trip.dayDuration > 0 && trip.nightDuration > 0 && " / "}
          {trip.nightDuration > 0 &&
            `${trip.nightDuration} ${renderContent(
              "Night(s)",
              "Noche(s)",
              "Noite(s)"
            )}`}
        </h3>
      </div>
      <div className="detail">
        <img src={people} alt="" />
        <p>{renderContent("Trip Type", "Tipo de viaje", "Tipo de viagem")}</p>
        <h3>
          {trip.tripType === "Private"
            ? renderContent("Private Tour", "Tour privado", "Tour privado")
            : renderContent("Public Tour", "Tour Público", "Tour Público")}
        </h3>
      </div>
      <div className="detail">
        <img src={world} alt="" />
        <p>{renderContent("No of Cities", "Número de ciudades", "Número de cidades")}</p>
        <h3>
          {trip.cities.length > 1 ? `${trip.cities.length} ${renderContent("Cities", "ciudades", "cidades")}` : `1 ${renderContent("City", "Ciudad", "Cidade")}`}
        </h3>
      </div>
    </div>
  );
}
