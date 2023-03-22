import React from "react";
import location from "../../images/location.svg";
import price from "../../images/price.svg";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({data}) {
  return (
    <div className="card-outer">
      <div className="card">
      <div className="card-content">
        <img src={data.imgURL} alt="" className="header-image" />
        <h4>{data.title}</h4>
        <p>{data.description}</p>  
        </div>
        <div className="features">
          <div className="feature">
            <img src={location} alt="" />
            <h5>{data.location}</h5>
          </div>
          <hr />
          <div className="feature">
            <img src={price} alt="" />
            <h5>${data.price}</h5>
          </div>
        </div>
      </div>
      <Link to="/" className="btn" id="explore-btn">
        Explore More
      </Link>
    </div>
  );
}
