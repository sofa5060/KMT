import React from "react";
import { Fade } from "react-slideshow-image";
import nextArrowIcon from "../../images/next.svg";
import prevArrowIcon from "../../images/prev.svg";
import "react-slideshow-image/dist/styles.css";
import "./Homepage.css";

export default function Homepage() {
  const images = [
    {
      imageLink: "https://i.ibb.co/F4N38S0/Egypt-Modified-1.png",
      cityName: "Pyramids of Giza",
    },
    {
      imageLink: "https://i.ibb.co/8jyG9cL/Egypt-Modified-2.png",
      cityName: "Aswan",
    },
  ];

  const properties = {
    prevArrow: (
      <div className="arrow left-arrow">
        <img src={prevArrowIcon} alt="" />
      </div>
    ),
    nextArrow: (
      <div className="arrow right-arrow">
        <img src={nextArrowIcon} alt="" />
      </div>
    ),
    pauseOnHover: true,
    infinite: true,
    autoplay: true,
  };

  return (
    <div className="homepage">
      <Fade {...properties}>
        {images.map((img) => {
          return (
            <div className="each-slide" key={img.cityName}>
              <div>
                <img src={img.imageLink} alt={img.cityName} />
              </div>
              <div className="slider-content">
                <h4>KMT TOURS</h4>
                <h1>
                  Explore New Places of <span>EGYPT!</span>
                </h1>
                <h3>
                  Get a taste of the past on our trips to Egypt, where you’ll
                  take a walk through the footsteps of the pharaohs through
                  ancient temples and monuments.
                </h3>
                <div className="slider">
                  <h3>{img.cityName}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
}
