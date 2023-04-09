import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Imagesviewer from "../../components/ImagesViewer/Imagesviewer";
import Map from "../../components/Map/Map";
import Trippricecard from "../../components/TripPriceCard/Trippricecard";
import "./Trippage.css";
import { TripContext } from "../../context/TripContextProvider";

export default function Trippage() {
  const { trip } = useContext(TripContext);

  return (
    <div className="trip-page">
      <div className="trip-content">
        <h1>{trip.title}</h1>
        <Imagesviewer imagesList={trip.images} />
        <h3 className="section-header">Overview</h3>
        <div className="section-content">
          <p>{trip.overView.mainDescription}</p>
          <ul className="bullet-list">
            {trip.overView.points.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <Map locations={trip.locations} />
        <hr className="split-line" />
        <h3 className="section-header">Inclusions</h3>
        <div className="section-content">
          <ul className="bullet-list">
            {trip.inclusion.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <hr className="split-line" />
        </div>
        <h3 className="section-header">Exclusions</h3>
        <div className="section-content">
          <ul className="bullet-list">
            {trip.exclusion.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <hr className="split-line" />
        </div>
        <p className="contact">
          For more information.... <Link to="/">Contact Us</Link>
        </p>
      </div>
      <Trippricecard tripDetails={trip} />
    </div>
  );
}
