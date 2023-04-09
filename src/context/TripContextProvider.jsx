import React, { useState, useEffect, createContext } from "react";
import trip1 from "../images/trip1.png";
import trip2 from "../images/trip2.png";
import trip3 from "../images/trip3.png";
import trip4 from "../images/trip4.png";
import trip5 from "../images/trip5.png";

export const TripContext = createContext();

const TripContextProvider = (props) => {
  const [trip, setTrip] = useState({
    title: "The Pyramids of Giza & Sphinx",
    addOns: [
      { name: "Private Tour", price: 299.99, checked: false },
      { name: "Hotel Pickup", price: 0, checked: true },
      { name: "Professional Photographer", price: 99.99, checked: false },
    ],
    locations: [
      {
        name: "Giza Pyramids",
        lat: 29.979513301248577,
        lng: 35.134201899569657,
        order: 1,
      },
      {
        name: "Saqqara Pyramids",
        lat: 25.977513301248577,
        lng: 27.134201899569657,
        order: 2,
      },
      {
        name: "Papyrus Museum",
        lat: 31.077513301248577,
        lng: 32.134201899569657,
        order: 3,
      },
      {
        name: "Sphinx Statue",
        lat: 25.077513301248577,
        lng: 33.134201899569657,
        order: 4,
      },
    ],
    inclusion: [
      "Entry Fees",
      "All Fees and Taxes",
      "Professional Egyptology English tour guide for the whole itinerary.",
      "Bottled water",
      "Air-conditioned vehicle",
      "All the parking fees & the road tolls during the whole itinerary.",
      "The main entrance fees of all the mentioned sightseeing.",
      "All taxes & service charge.",
      "All the mentioned services are private.",
    ],
    exclusion: [
      "Professional Private Photographer at the Giza Plateau",
      "Desert sand ATV quads by the Pyramids for 60 mins! Maybe we can watch the sunset in the desert while having Bedouin tea with the amazing view.",
      "Hot Air Balloon Ride over the Pyramids of Giza",
      "Optional tours or tickets.",
    ],
    overView: {
      mainDescription:
        "Discover Pyramid Tour In Egypt visiting Giza Pyramids! Your guide will take you to the 5000-year old Great Pyramids. Stand at the Pyramids, of Cheops, Chefren, Mykerinus and guarded by the Great Sphinx.",
      points: [
        "Visit Saqqara Pyramids, the Step Pyramid, and enter inside the Ounas Pyramid there.",
        "Visit the Giza plateau (Cheops, Chefren, Mykerinus Pyramids) and the Sphinx.",
        "Horse or camel riding to see the panoramic view of the 9 pyramids.",
        "Visit the Sphinx Statue.",
        "Papyrus Museum to learn about the strongest paper in history.",
        "Hotel drop off.",
      ],
    },
    images: [trip1, trip2, trip3, trip4, trip5, trip2],
    discountedPrice: 49.99,
    price: 99.99,
    duration: 1,
  });

  return (
    <TripContext.Provider
      value={{
        trip: trip,
      }}
    >
      {props.children}
    </TripContext.Provider>
  );
};
export default TripContextProvider;
