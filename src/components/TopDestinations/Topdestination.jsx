import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Skeleton from "@mui/material/Skeleton";
import "./Topdestination.css";
import axios from "axios";
import "animate.css/animate.min.css";
import Cardlist from "../CardList/Cardlist";
import { useMediaQuery } from "@mui/material";

export default function Topdestination() {
  const [destinations, setDestinations] = useState(null);

  const matches = useMediaQuery("(max-width:1000px)");

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
      {destinations ? (
        <Cardlist destinations={destinations} />
      ) : (
        <div className="row">
          <Skeleton animation="wave" width={360} height={matches ? 240 : 400} />
          <Skeleton animation="wave" width={360} height={matches ? 240 : 400} />
          <Skeleton animation="wave" width={360} height={matches ? 240 : 400} />
        </div>
      )}
      <Link to="/trips" className="btn">
        Show More Destinations
      </Link>
    </div>
  );
}
