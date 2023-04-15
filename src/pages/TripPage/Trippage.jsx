import React, { useEffect, useState } from "react";
import { Link, Redirect , useParams } from "react-router-dom";
import Imagesviewer from "../../components/ImagesViewer/Imagesviewer";
import Map from "../../components/Map/Map";
import Trippricecard from "../../components/TripPriceCard/Trippricecard";
import "./Trippage.css";
import axios from "axios"

export default function Trippage() {
  const [trip, setTrip] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { tripID } = useParams();

  const getTripByID = async (id) => {
    if (trip) return;
    try{
      const response = await axios.get(`http://localhost:5000/trip/${id}`);
      console.log(response);
      setTrip(response.data);
    }catch(e){
      setNotFound(true);
    }
  };
  
  useEffect(() => {
    getTripByID(tripID);
  }, [tripID]);

  if(notFound) return <Redirect to="/" />;

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
