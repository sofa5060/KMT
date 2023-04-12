import React from "react";
import { Link } from "react-router-dom";
import location from "../../images/location.svg";
import price from "../../images/price.svg";
import EastIcon from "@mui/icons-material/East";
import "./Triplistitem.css";

export default function Triplistitem({trip}) {
  return (
    <div className="trip-list-item">
      <div className="trip-image">
        <img src={trip.image} alt="" />
      </div>
      <div className="trip-info">
        <h3>{trip.name}</h3>
        <p>
          {trip.description}
        </p>
        <div className="features">
          <div className="feature">
            <img src={location} alt="" />
            <h5>{trip.location}</h5>
          </div>
          <hr />
          <div className="feature">
            <img src={price} alt="" />
            <h5>${trip.price}</h5>
          </div>
        </div>
        <Link to="/trip/1">
          Explore More <EastIcon />
        </Link>
      </div>
    </div>
  );
}
