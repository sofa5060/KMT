import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Personalized.css";
import bagTrip from "../../images/bagTrip.png";
import tape from "../../images/tape.svg";
import Quotepageform from "../QuotePageForm/Quotepageform";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Personalized() {
  const { renderContent } = useContext(LanguageContext);
  return (
    <div className="personalized">
      <h2>
        {renderContent(
          "Personalized Trips at ",
          "Viajes personalizados en ",
          "Viagens personalizadas na "
        )}
        <span>KMT Tours</span>
      </h2>
      <div className="row">
        <div className="left">
          <img src={tape} alt="" />
          <div className="content">
            <p>
              {renderContent("At ", "En ", "Na ")}
              <span>KMT Tours</span>,{" "}
              {renderContent(
                "We understand that not everyone fits into a 'one size fits all' travel package. That's why we offer personalized trips tailored to your unique interests, budget, and schedule. Whether you're a first-time visitor or a seasoned traveler",
                "entendemos que no todos encajan en un paquete de viaje 'talla única'. Es por eso que ofrecemos viajes personalizados adaptados a tus intereses, presupuesto y horario únicos. Ya seas un visitante por primera vez o un viajero experimentado",
                "entendemos que nem todos se encaixam em um pacote de viagem 'tamanho único'. É por isso que oferecemos viagens personalizadas adaptadas aos seus interesses, orçamento e horário únicos. Seja você um visitante de primeira viagem ou um viajante experiente"
              )}
            </p>
            <Quotepageform minimized />
          </div>
        </div>
        <div className="right">
          <img src={bagTrip} alt="planning trip" />
        </div>
      </div>
    </div>
  );
}
