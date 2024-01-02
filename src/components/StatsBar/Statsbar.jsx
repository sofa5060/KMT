import React, { useState, useContext } from "react";
import "./Statsbar.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Statsbar() {
  const [isTravelersCountEnded, setTravelersCountEnded] = useState(false);
  const [isTripsCountEnded, setTripsCountEnded] = useState(false);
  const [counterStart, setCounterStart] = useState(false);
  const { renderContent } = useContext(LanguageContext);

  return (
    <ScrollTrigger
      onEnter={() => setCounterStart(true)}
      onExit={() => {
        setCounterStart(false);
        setTravelersCountEnded(false);
        setTripsCountEnded(false);
      }}
    >
      <div className="stats-bar-background">
        <div className="stats-bar">
          <h2>
            {renderContent(
              "Join Our Thousands of Satisfied Travelers!",
              "¡Únete a nuestros miles de viajeros satisfechos!",
              "Junte-se a nossos milhares de viajantes satisfeitos!"
            )}
          </h2>
          <div className="stats">
            <div className="stat">
              {counterStart && (
                <h1>
                  {isTravelersCountEnded ? (
                    "9k+"
                  ) : (
                    <React.Fragment>
                      <CountUp
                        start={0}
                        end={9}
                        duration={1.5}
                        separator=""
                        onEnd={() => {
                          setTravelersCountEnded(true);
                        }}
                      />
                      k
                    </React.Fragment>
                  )}
                </h1>
              )}
              <p>{renderContent("Total Travelers", "Viajeros totales", "Total de viajantes")}</p>
            </div>
            <div className="stat">
              {counterStart && (
                <h1>
                  {isTripsCountEnded ? (
                    "1.1k"
                  ) : (
                    <React.Fragment>
                      <CountUp
                        start={0}
                        end={1.1}
                        duration={2}
                        separator=""
                        decimal="."
                        decimals={1}
                        onEnd={() => {
                          setTripsCountEnded(true);
                        }}
                      />
                      k
                    </React.Fragment>
                  )}
                </h1>
              )}
              <p>{renderContent("Total Trips", "Viajes totales", "Viagens totais")}</p>
            </div>
            <div className="stat">
              {counterStart && (
                <h1>
                  <CountUp
                    start={0}
                    end={4.9}
                    decimals={1}
                    decimal="."
                    duration={2}
                  />
                  /5
                </h1>
              )}
              <p>{renderContent("Travelers Satisfaction rate", "Tasa de satisfacción de los viajeros", "Taxa de satisfação dos viajantes")}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
