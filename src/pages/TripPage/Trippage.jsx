import React from "react";
import { Link } from "react-router-dom";
import Imagesviewer from "../../components/ImagesViewer/Imagesviewer";
import Trippricecard from "../../components/TripPriceCard/Trippricecard";
import trip1 from "../../images/trip1.png";
import trip2 from "../../images/trip2.png";
import trip3 from "../../images/trip3.png";
import trip4 from "../../images/trip4.png";
import trip5 from "../../images/trip5.png";
import "./Trippage.css";

export default function Trippage() {
  const addOns = [{ name: "Private Tour", price: 299.99, checked: false }, { name: "Hotel Pickup", price: 0, checked: true }, { name: "Professional Photographer", price: 99.99, checked: false}]
  return (
    <div className="trip-page">
      <div className="trip-content">
        <h1>The Pyramids of Giza & Sphinx</h1>
        <Imagesviewer imagesList={[trip1, trip2, trip3, trip4, trip5, trip1]} />
        <h3 className="section-header">Overview</h3>
        <div className="section-content">
          <p>
            Discover Pyramid Tour In Egypt visiting Giza Pyramids! Your guide
            will take you to the 5000-year old Great Pyramids. Stand at the
            Pyramids, of Cheops, Chefren, Mykerinus and guarded by the Great
            Sphinx.
          </p>
          <ul className="bullet-list">
            <li>Hotel pick-up.</li>
            <li>
              Visit Saqqara Pyramids, the Step Pyramid, and enter inside the
              Ounas Pyramid there.
            </li>
            <li>
              Visit the Giza plateau (Great pyramids Khufu, Khafre's Pyramid,
              and Menkaure).
            </li>
            <li>
              Horse or camel riding to see the panoramic view of the 9 pyramids.
            </li>
            <li>Visit the Sphinx Statue.</li>
            <li>
              Papyrus Museum to learn about the strongest paper in history.
            </li>
            <li>Hotel drop off.</li>
          </ul>
        </div>
        <hr className="split-line" />
        <h3 className="section-header">Inclusions</h3>
        <div className="section-content">
          <ul className="bullet-list">
            <li>Entry Fees</li>
            <li>All Fees and Taxes</li>
            <li>
              Professional Egyptology English tour guide for the whole
              itinerary.
            </li>
            <li>Bottled water</li>
            <li>Air-conditioned vehicle</li>
            <li>
              All the parking fees & the road tolls during the whole itinerary.
            </li>
            <li>The main entrance fees of all the mentioned sightseeing.</li>
            <li>All the mentioned tours & activities in the program.</li>
            <li>All the mentioned meals in the program.</li>
            <li>24 hours follow-up & service during the whole itinerary.</li>
          </ul>
          <hr className="split-line" />
        </div>
        <h3 className="section-header">Exclusions</h3>
        <div className="section-content">
          <ul className="bullet-list">
            <li>Professional Private Photographer at the Giza Plateau.</li>
            <li>
              Desert sand ATV quads by the Pyramids for 60 mins! Maybe we can
              watch the sunset in the desert while having Bedouin tea with the
              amazing view.
            </li>
            <li>Tipping. "Guides, Drivers & Cruise staff"</li>
            <li>Optional tours or tickets.</li>
          </ul>
          <hr className="split-line" />
        </div>
        <p className="contact">
          For more information.... <Link to="/">Contact Us</Link>
        </p>
      </div>
      <Trippricecard addOns={addOns}/>
    </div>
  );
}
