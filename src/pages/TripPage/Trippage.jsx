import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import Imagesviewer from "../../components/ImagesViewer/Imagesviewer";
import Map from "../../components/Map/Map";
import Trippricecard from "../../components/TripPriceCard/Trippricecard";
import Quotepageform from "../../components/QuotePageForm/Quotepageform";
import "./Trippage.css";
import axios from "axios";
import Tripsummarydetails from "../../components/TripSummaryDetails/Tripsummarydetails";
import Newsletter from "../../components/Newsletter/Newsletter";
import nile from "../../images/nile.png";
import Cardlist from "../../components/CardList/Cardlist";
import { TripContext } from "../../context/TripContextProvider";
import AddOn from "../../models/AddOn";
import { CircularProgress } from "@mui/material";

export default function Trippage({ setCurrPage }) {
  const { contextTrip } = useContext(TripContext);
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState("");
  const { tripID } = useParams();
  const [trips, setTrips] = useState([]);

  const getTripByID = async (id) => {
    if (trip && trip.id === id) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/trip/${id}`);
      console.log(res);
      let resTrip = res.data;
      resTrip.addOns = resTrip.addOns.map(
        (addOn) => new AddOn(addOn.name, addOn.prices, addOn.checked)
      );
      setTrip(resTrip);
    } catch (e) {
      // TODO Change this at production
      // setNotFound(true);
      console.log(e);
      setTrip(contextTrip);
      // setError(e.response ? e.response.data.message : e.message);
    }
  };

  useEffect(() => {
    getTripByID(tripID);
  }, [tripID]);

  useEffect(() => {
    setCurrPage("trips");
  }, []);

  useEffect(() => {
    if(!trip) return;
    const getTrips = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/related?cities=${trip.cities}&id=${trip.id}`);
        console.log(res);
        setTrips(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getTrips();
  }, [trip]);

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
          <Tripsummarydetails trip={trip} />
          <h3 className="section-header">Overview</h3>
          <div className="section-content">
            <p>{trip.overView}</p>
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
              <Quotepageform minimized />
            </div>
          </p>
        </div>
        <Trippricecard tripDetails={trip} />
      </div>
      <h4 className="trips-header">Related Trips</h4>
      {trips.length === 0 ? (
        <div className="center">
          <CircularProgress />
        </div>
      ) : (
        <Cardlist destinations={trips} extend />
      )}
      <Newsletter />
    </div>
  );
}
