import React, { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import Imagesviewer from "../../components/ImagesViewer/Imagesviewer";
import Map from "../../components/Map/Map";
import Trippricecard from "../../components/TripPriceCard/Trippricecard";
import Quoteform from "../../components/QuoteForm/Quoteform";
import "./Trippage.css";
import axios from "axios";
import Tripsummarydetails from "../../components/TripSummaryDetails/Tripsummarydetails";
import Newsletter from "../../components/Newsletter/Newsletter";
import nile from "../../images/nile.png";
import Cardlist from "../../components/CardList/Cardlist";

export default function Trippage({ setCurrPage }) {
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState("");
  const { tripID } = useParams();
  const [trips, setTrips] = useState([
    {
      id: 1,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 99.99,
      overViewImage: nile,
      sells: 5,
      cities: ["Giza", "Aswan", "Luxor", "Alexandria"],
    },
    {
      id: 2,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 99.99,
      overViewImage: nile,
      sells: 5,
      cities: ["Giza", "Aswan", "Luxor", "Alexandria"],
    },
    {
      id: 3,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      overViewImage: nile,
      sells: 5,
      cities: ["Giza", "Aswan", "Luxor", "Alexandria"],
    },
    {
      id: 3,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      overViewImage: nile,
      sells: 5,
      cities: ["Giza", "Aswan", "Luxor", "Alexandria"],
    },
    {
      id: 3,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      overViewImage: nile,
      sells: 5,
      cities: ["Giza", "Aswan", "Luxor", "Alexandria"],
    },
    {
      id: 3,
      name: "Lowest Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      overViewImage: nile,
      sells: 2,
      cities: ["Giza", "Aswan", "Luxor", "Alexandria"],
    },
    {
      id: 3,
      name: "Highest Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      overViewImage: nile,
      sells: 10,
      cities: ["Giza", "Aswan", "Luxor", "Alexandria"],
    },
    {
      id: 3,
      name: "Zelucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.0,
      overViewImage: nile,
      sells: 5,
      cities: ["Giza", "Aswan", "Luxor", "Alexandria"],
    },
  ]);

  const getTripByID = async (id) => {
    if (trip) return;
    try {
      const response = await axios.get(`http://localhost:5000/api/trip/${id}`);
      console.log(response);
      setTrip(response.data);
    } catch (e) {
      // setNotFound(true);
      console.log(e);
      setError(e.response ? e.response.data.message : e.message);
    }
  };

  useEffect(() => {
    getTripByID(tripID);
  }, [tripID]);

  useEffect(() => {
    setCurrPage("trips");
  }, []);

  if (error.length > 0)
    // TODO add error page with variable msg
    return (
      <div className="error">
        <h1>{error}</h1>
        <Link to="/">Go to Home</Link>
      </div>
    );

  if (!trip) return <div>Loading...</div>; // TODO add trip loading component

  return (
    <div className="trip-page-container">
      <div className="trip-page">
        <div className="trip-content">
          <h1>{trip.title}</h1>
          <Imagesviewer imagesList={trip.images} />
          <Tripsummarydetails trip={trip}/>
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
            For more information.... <Link to="/contact">Contact Us</Link>
            <div className="divider">
              <hr />
              <h4>OR</h4>
              <hr />
            </div>
            <div className="form">
              <h3>Request Personalized Trip</h3>
              <Quoteform minimized />
            </div>
          </p>
        </div>
        <Trippricecard tripDetails={trip} />
      </div>
      <h4 className="trips-header">Related Trips</h4>
      <Cardlist destinations={trips} extend/>
      <Newsletter />
    </div>
  );
}
