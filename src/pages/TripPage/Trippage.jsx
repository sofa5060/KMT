import React, { useEffect, useState } from "react";
import { Link, Redirect , useParams } from "react-router-dom";
import Imagesviewer from "../../components/ImagesViewer/Imagesviewer";
import Map from "../../components/Map/Map";
import Trippricecard from "../../components/TripPriceCard/Trippricecard";
import "./Trippage.css";
import axios from "axios"

export default function Trippage() {
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState("");
  const { tripID } = useParams();

  const getTripByID = async (id) => {
    if (trip) return;
    try{
      const response = await axios.get(`http://localhost:5000/api/trip/${id}`);
      console.log(response);
      setTrip(response.data);
    }catch(e){
      // setNotFound(true);
      console.log(e)
      setError(e.response ? e.response.data.message : e.message);
    }
  };
  
  useEffect(() => {
    getTripByID(tripID);
  }, [tripID]);

  if(error.length > 0) return (
    <div className="error">
      <h1>{error}</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );

  if(!trip) return <div>Loading...</div>

  return (
    <div className="trip-page">
      <div className="trip-content">
        <h1>{trip.title}</h1>
        <Imagesviewer imagesList={trip.images} />
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
          For more information.... <Link to="/">Contact Us</Link>
        </p>
      </div>
      <Trippricecard tripDetails={trip} />
    </div>
  );
}
