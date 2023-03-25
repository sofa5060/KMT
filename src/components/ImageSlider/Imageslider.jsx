import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import nextArrowIcon from "../../images/next.svg";
import prevArrowIcon from "../../images/prev.svg";
import "./Imageslider.css";

export default function Imageslider() {
  const images = [
    {
      imageLink: "https://i.ibb.co/1QNKHFd/Egypt-Modified-1.png",
      cityName: "Pyramids of Giza",
      searchTerm: "giza",
    },
    {
      imageLink: "https://i.ibb.co/m0NZH8C/Egypt-Modified-2.png",
      cityName: "Aswan",
      searchTerm: "aswan",
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
    <Fade {...properties}>
      {images.map((img) => {
        return (
          <div className="each-slide" key={img.cityName}>
            <img src={img.imageLink} alt={img.cityName} />
            <div className="slider-content">
              <h4>KMT TOURS</h4>
              <h1>
                Explore New Places of <span>EGYPT!</span>
              </h1>
              <h3>
                Get a taste of the past on our trips to Egypt, where you’ll take
                a walk through the footsteps of the pharaohs through ancient
                temples and monuments.
              </h3>
              <div className="slider">
                <Link to={"search/" + img.searchTerm}>{img.cityName}</Link>
              </div>
            </div>
          </div>
        );
      })}
    </Fade>
  );
}
