import React, { useState } from "react";
import "./Statsbar.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Statsbar() {
  const [isTravelersCountEnded, setTravelersCountEnded] = useState(false);
  const [isTripsCountEnded, setTripsCountEnded] = useState(false);
  const [counterStart, setCounterStart] = useState(false);
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
          <h2>Join Our Thousands of Satisfied Travelers!</h2>
          <div className="stats">
            <div className="stat">
              {counterStart && (
                <h1>
                  {isTravelersCountEnded ? (
                    "9k+"
                  ) : (
                    <CountUp
                      start={0}
                      end={9000}
                      duration={1.5}
                      separator=""
                      onEnd={() => {
                        setTravelersCountEnded(true);
                      }}
                    />
                  )}
                </h1>
              )}
              <p>Total Travelers</p>
            </div>
            <div className="stat">
              {counterStart && (
                <h1>
                  {isTripsCountEnded ? (
                    "1.1k"
                  ) : (
                    <CountUp
                      start={0}
                      end={1100}
                      duration={1.5}
                      separator=""
                      onEnd={() => {
                        setTripsCountEnded(true);
                      }}
                    />
                  )}
                </h1>
              )}
              <p>Total Trips</p>
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
              <p>Travelers Satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
