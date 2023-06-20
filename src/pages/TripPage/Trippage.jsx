import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Imagesviewer from "../../components/ImagesViewer/Imagesviewer";
import Map from "../../components/Map/Map";
import Trippricecard from "../../components/TripPriceCard/Trippricecard";
import Quotepageform from "../../components/QuotePageForm/Quotepageform";
import "./Trippage.css";
import axios from "axios";
import Tripsummarydetails from "../../components/TripSummaryDetails/Tripsummarydetails";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cardlist from "../../components/CardList/Cardlist";
import AddOn from "../../models/AddOn";
import { CircularProgress } from "@mui/material";
import Messagepage from "../../components/MessagePage/Messagepage";
import ReactMarkdown from "react-markdown";

export default function Trippage({ setCurrPage }) {
  const [trip, setTrip] = useState(null);
  const [tripNotFound, setNotFound] = useState(false);
  const { tripID } = useParams();
  const [trips, setTrips] = useState([]);

  const getTripByID = async (id) => {
    if (trip && trip.id === id) return;
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/trip/${id}`);
      let resTrip = res.data;
      resTrip.addOns = resTrip.addOns.map(
        (addOn) => new AddOn(addOn.name, addOn.prices, addOn.checked)
      );
      resTrip.accommodations = resTrip.accommodations.map(
        (accommodation) =>
          new AddOn(
            accommodation.name,
            accommodation.prices,
            accommodation.checked
          )
      );
      setTrip(resTrip);
    } catch (e) {
      setNotFound(true);
      console.log(e);
      // setTrip(contextTrip);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getTripByID(tripID);
  }, [tripID]);

  useEffect(() => {
    setCurrPage("trips");
  }, []);

  useEffect(() => {
    if (!trip) return;
    const getTrips = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/related?cities=${trip.cities}&id=${trip.id}`
        );
        console.log(res);
        setTrips(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getTrips();
  }, [trip]);

  if (tripNotFound) return <Messagepage type="page404" />;

  if (!trip)
    return (
      <div className="center">
        <CircularProgress />
      </div>
    );

  return (
    <div className="trip-page-container">
      <div className="trip-page">
        <div className="trip-content">
          <h1>{trip.title}</h1>
          <Imagesviewer imagesList={trip.images} mainImage={trip.overViewImage} />
          <Tripsummarydetails trip={trip} />
          <h3 className="section-header">Description</h3>
          <div className="section-content">
            <ReactMarkdown>{trip.description}</ReactMarkdown>
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
