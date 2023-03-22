import React from "react";
import "react-slideshow-image/dist/styles.css";
import "./Homepage.css";
import Searchbox from "../../components/SearchBox/Searchbox";
import Statsbar from "../../components/StatsBar/Statsbar";
import Topdestination from "../../components/TopDestinations/Topdestination";
import Imageslider from "../../components/ImageSlider/Imageslider";
import Benefits from "../../components/Benefits/Benefits";

export default function Homepage() {
  return (
    <div className="homepage">
      <Imageslider />
      <Searchbox />
      <Statsbar />
      <Topdestination />
      <Benefits />
    </div>
  );
}
