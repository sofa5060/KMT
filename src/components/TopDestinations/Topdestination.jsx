import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Skeleton from "@mui/material/Skeleton";
import "./Topdestination.css";
import axios from "axios";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function Topdestination() {
  const [destinations, setDestinations] = useState(null);

  const getTopDestinations = async () => {
    if (destinations) return;
    try {
      const response = await axios.get(
        "http://localhost:5000/api/trips/top-destinations"
      );
      console.log(response);
      setDestinations(response.data);
    } catch (e) {
      // setNotFound(true);
      console.log(e);
    }
  };
  useEffect(() => {
    getTopDestinations();
  }, []);
  return (
    <div className="top-destination">
      <h3>Top Destinations</h3>
      <p>
        Journey Through Time: Explore Egypt's Most Iconic Sites with KMT Tours!
      </p>
      <div className="card-list" style={{ marginBottom: !destinations && 0 }}>
        {destinations ? (
          destinations.map((destination, index) => (
            <AnimationOnScroll animateIn="animate__fadeInLeft" delay={index*200} animateOnce>
              <Card key={destination.id} data={destination} />
            </AnimationOnScroll>
          ))
        ) : (
          <div className="row">
            <Skeleton animation="wave" width={360} height={400} />
            <Skeleton animation="wave" width={360} height={400} />
            <Skeleton animation="wave" width={360} height={400} />
          </div>
        )}
      </div>
      <Link to="/search/1" className="btn">
        Show More Destinations
      </Link>
    </div>
  );
}
