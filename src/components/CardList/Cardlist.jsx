import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Card from "../Card/Card";
import "./Cardlist.css";

export default function Cardlist({ destinations, extend }) {
  if (extend) {
    return (
      <div className="card-list-outer">
        <div className="card-list extend">
          {destinations.map((destination, index) => {
            if (extend) {
              return <Card data={destination} key={index} />;
            } else {
              return (
                <AnimationOnScroll
                  animateIn="animate__fadeInLeft"
                  delay={index * 200}
                  animateOnce
                  key={destination.id}
                >
                  <Card data={destination} />
                </AnimationOnScroll>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-list">
        {destinations.map((destination, index) => (
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            delay={index * 200}
            animateOnce
            key={destination.id}
          >
            <Card data={destination} />
          </AnimationOnScroll>
        ))}
      </div>
    );
  }
}
