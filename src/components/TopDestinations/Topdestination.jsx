import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import temp from "../../images/temp.png";
import temp1 from "../../images/temp1.png";
import temp2 from "../../images/temp2.png";
import "./Topdestination.css";

export default function Topdestination() {
  const destinations = [
    {
      id: 1,
      imgURL: temp,
      title: "Abu Simbel Temple",
      description:
        "Abu Simbel is a historic site comprising two massive rock-cut temples in the village of Abu Simbel",
      location: "Luxor, Egypt",
      price: 199.99,
    },
    {
      id: 2,
      imgURL: temp1,
      title: "The Pyramids of Giza & Sphinx",
      description:
        "The most famous Egyptian pyramids are found Giza, on the outskirts of Cairo. the Giza pyramids are counted among the largest structures ever",
      location: "Giza, Egypt",
      price: 99.99,
    },
    {
      id: 3,
      imgURL: temp2,
      title: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 39.99,
    },
  ];
  return (
    <div className="top-destination">
      <h3>Top Destinations</h3>
      <p>
        Journey Through Time: Explore Egypt's Most Iconic Sites with KMT Tours!
      </p>
      <div className="card-list">
        {destinations.map((destination) => (
          <Card key={destination.id} data={destination} />
        ))}
      </div>
      <Link to="/" className="btn">
        Show More Destinations
      </Link>
    </div>
  );
}
