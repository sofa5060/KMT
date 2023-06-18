import React from "react";
import "./Tripsummarydetails.css";
import world from "../../images/world.svg";
import sunrise from "../../images/sunrise.svg";
import location from "../../images/location2.svg";
import clock from "../../images/clock2.svg";
import people from "../../images/people2.svg";

// TODO load the data from the trip object
export default function Tripsummarydetails({ trip }) {
  return (
    <div className="trip-summary-details">
      {trip.hotelPickup && (
        <div className="detail">
          <img src={location} alt="" />
          <p>Hotel Pickup</p>
          <h3>Available</h3>
        </div>
      )}
      {/*
      <div className="detail">
        <img src={sunrise} alt="" />
        <p>Start From</p>
        <h3>6 AM</h3>
      </div>
      */}
      <div className="detail">
        <img src={clock} alt="" />
        <p>Duration</p>
        <h3>
          {trip.dayDuration} Days{" "}
          {trip.nightDuration > 0 && `/ ${trip.nightDuration} Nights`}
        </h3>
      </div>
      <div className="detail">
        <img src={people} alt="" />
        <p>Trip Type</p>
        <h3>{trip.tripType} Tour</h3>
      </div>
      <div className="detail">
        <img src={world} alt="" />
        <p>No of Cities</p>
        <h3>
          {trip.cities.length > 1 ? `${trip.cities.length} Cities` : "1 City"}
        </h3>
      </div>
    </div>
  );
}
