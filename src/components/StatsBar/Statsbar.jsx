import React, { useState } from "react";
import "./Statsbar.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Statsbar() {
  const [travellersCount, setTravellersCount] = useState(0);
  const [tripsCount, setTripsCount] = useState(0);
  const [counterStart, setCounterStart] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => {setCounterStart(false); setTravellersCount(0); setTripsCount(0)}}>
      <div className="stats-bar-background">
        <div className="stats-bar">
          <h2>Join Our Thousands of Satisfied Travelers!</h2>
          <div className="stats">
            <div className="stat">
              {counterStart && (
                <CountUp
                  start={0}
                  end={9000}
                  duration={1.5}
                  separator=""
                  onEnd={() => {
                    setTravellersCount("9k+");
                  }}
                  onStart={() => setTravellersCount(0)}
                >
                  {({ countUpRef, start }) => (
                    <h1 ref={travellersCount === 0 ? countUpRef : null}>
                      {travellersCount}
                    </h1>
                  )}
                </CountUp>
              )}
              <p>Total Travelers</p>
            </div>
            <div className="stat">
              {counterStart && (
                <CountUp
                  start={0}
                  end={1100}
                  duration={1.5}
                  separator=""
                  onEnd={() => {
                    setTripsCount("1.1k");
                  }}
                  onStart={() => setTripsCount(0)}
                >
                  {({ countUpRef, start }) => (
                    <h1 ref={tripsCount === 0 ? countUpRef : null}>
                      {tripsCount}
                    </h1>
                  )}
                </CountUp>
              )}
              <p>Total Trips</p>
            </div>
            <div className="stat">
              {counterStart && (
                <CountUp
                  start={0}
                  end={4.9}
                  decimals={1}
                  decimal="."
                  duration={2}
                >
                  {({ countUpRef, start }) => (
                    <h1>
                      <span ref={countUpRef}></span>/5
                    </h1>
                  )}
                </CountUp>
              )}
              <p>Travelers Satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
