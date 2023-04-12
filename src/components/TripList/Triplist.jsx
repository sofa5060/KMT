import React from "react";
import Triplistitem from "./Triplistitem";
import "./Triplist.css";

export default function Triplist({ trips }) {
  return (
    <div className="trip-list">
      {trips.map((trip, index) => (
        <Triplistitem trip={trip} key={index} />
      ))}
    </div>
  );
}
