import React, { useState, useEffect, createContext } from "react";
import trip1 from "../images/trip1.png";
import trip2 from "../images/trip2.png";
import trip3 from "../images/trip3.png";
import trip4 from "../images/trip4.png";
import trip5 from "../images/trip5.png";
import AddOn from "../models/AddOn";

export const TripContext = createContext();

const TripContextProvider = (props) => {
  const [contextTrip, setTrip] = useState({
    title: "The Pyramids of Giza & Sphinx",
    images: [
      "https://i.ibb.co/r7fZHHD/temp1.png",
      trip1,
      trip2,
      trip3,
      trip4,
      trip5,
      trip2,
    ],
    overViewImage: "https://i.ibb.co/r7fZHHD/temp1.png",
    cities: ["Giza", "Aswan", "Luxor", "Alexandria"],
    oldPrice: 99.99,
    price: 49.99,
    description:
      "The most famous Egyptian pyramids are found Giza, on the outskirts of Cairo. the Giza pyramids are counted among the largest structures ever",
    overView:
      "Discover Pyramid Tour In Egypt visiting Giza Pyramids! Your guide will take you to the 5000-year old Great Pyramids. Stand at the Pyramids, of Cheops, Chefren, Mykerinus and guarded by the Great Sphinx.",
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
    disabledDays: [0, 1], // 0 Saturday
    dayDuration: 1,
    nightDuration: 0,
    maxGroupSize: 99,
    tripType: "Private",
    sells: 0,
    addOns: [
      new AddOn(
        "Private Tour",
        [
          {
            minSize: 1,
            maxSize: 3,
            personPrice: 50,
          },
          {
            minSize: 4,
            maxSize: 7,
            personPrice: 40,
          },
        ],
        false
      ),
      new AddOn(
        "Professional Photographer",
        [
          {
            minSize: 1,
            maxSize: 3,
            personPrice: 99.99,
            oldPersonPrice: 599.99
          },
          {
            minSize: 5,
            maxSize: 7,
            personPrice: 49.99,
          },
        ],
        false
      ),
      new AddOn(
        "Hotel Pickup",
        [
          {
            minSize: 1,
            maxSize: 1,
            personPrice: 0,
          },
        ],
        true
      ),
    ],
  });

  return (
    <TripContext.Provider
      value={{
        contextTrip: contextTrip,
      }}
    >
      {props.children}
    </TripContext.Provider>
  );
};
export default TripContextProvider;
