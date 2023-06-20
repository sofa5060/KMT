import React, { useRef, useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import markerPNG from "../../images/marker.png";
import "./Map.css";
import axios from "axios";

export default function Map({ locations }) {
  const mapRef = useRef();
  const [tripLocations, setTripLocations] = useState(null);

  useEffect(() => {
    if (!locations) return;
    setTripLocations(locations);
  }, [locations]);

  useEffect(() => {
    if (!tripLocations) return;

    // used for a dashed line between markers
    const lineSymbol = {
      path: "M 0,-1 0,1",
      strokeOpacity: 1,
      scale: 4,
    };

    const loader = new Loader({
      apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
      version: "weekly",
      language: "EN",
    });
    
    console.log(loader);

    loader.load().then(() => {
      const addMarker = (location) => {
        let marker = new window.google.maps.Marker({
          position: {
            lat: parseFloat(location.lat),
            lng: parseFloat(location.lng),
          },
          map: map,
          title: location.name,
          label: `${location.order}`,
          icon: {
            url: markerPNG,
            labelOrigin: new window.google.maps.Point(18, 13),
          },
        });

        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      };

      // Create an info window to share between markers.
      const infoWindow = new window.google.maps.InfoWindow();

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 26.8206, lng: 30.8025 },
        zoom: 5,
        mapTypeId: "satellite",
      });

      for (let i = 1; i < tripLocations.length; i++) {
        // draw a dashed line between markers
        new window.google.maps.Polyline({
          path: [
            { lat: tripLocations[i - 1].lat, lng: tripLocations[i - 1].lng },
            { lat: tripLocations[i].lat, lng: tripLocations[i].lng },
          ],
          geodesic: true,
          strokeColor: "#000000",
          strokeOpacity: 0,
          strokeWeight: 2,
          icons: [
            {
              icon: lineSymbol,
              offset: "0",
              repeat: "20px",
            },
          ],
          map: map,
        });
      }

      for (let i = 0; i < tripLocations.length; i++) {
        const location = tripLocations[i];
        addMarker(location);
      }
    });
  }, [tripLocations]);

  return <div ref={mapRef} id="map"></div>;
}
