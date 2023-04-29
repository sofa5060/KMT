import React from "react";
import temple from "../../images/temple.svg";
import convenient from "../../images/convenient.svg";
import experts from "../../images/experts.svg";
import guide from "../../images/guide.svg";
import "./Benefits.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function Benefits() {
  return (
    <div className="benefits">
      <h1>
        Why Travel with <span>KMT Tours</span>
      </h1>
      <section>
        <div className="left">
          <img src={temple} alt="" className="main-image" />
        </div>
        <div className="right">
          <div className="point">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              duration={0.7}
              animateOnce
            >
              <div className="benefit">
                <img src={experts} alt="" />
                <h4>Hassle-free experience</h4>
              </div>
            </AnimationOnScroll>
            <p>
              Our team consists of experienced tour guides who know Egypt like
              the back of their hands. We'll take you to hidden gems and famous
              landmarks alike, and share fascinating stories about each place
              you visit.
            </p>
          </div>
          <div className="point">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              duration={0.7}
              animateOnce
            >
              <div className="benefit">
                <img src={guide} alt="" />
                <h4>Unmatched Expertise</h4>
              </div>
            </AnimationOnScroll>
            <p>
              We believe that every traveler is unique, and that's why we offer
              customizable tours. Whether you want to focus on ancient history
              or modern-day culture, we'll tailor the tour to your preferences.
            </p>
          </div>
          <div className="point">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              duration={0.7}
              animateOnce
            >
              <div className="benefit">
                <img src={convenient} alt="" />
                <h4>Personalized tours</h4>
              </div>
            </AnimationOnScroll>
            <p>
              We take care of everything, from transportation to accommodation,
              so you can relax and enjoy your trip. Our team is available 24/7
              to answer any questions or concerns you may have.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
