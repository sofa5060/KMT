import React, {useEffect} from "react";
import "react-slideshow-image/dist/styles.css";
import "./Homepage.css";
import Statsbar from "../../components/StatsBar/Statsbar";
import Topdestination from "../../components/TopDestinations/Topdestination";
import Imageslider from "../../components/ImageSlider/Imageslider";
import Benefits from "../../components/Benefits/Benefits";
import Newsletter from "../../components/Newsletter/Newsletter";
import Personalized from "../../components/Personalized/Personalized";

export default function Homepage({setCurrPage}) {
  useEffect(() => {
    setCurrPage("home");
  }, []);
  
  return (
    <div className="homepage">
      <Imageslider />
      <Statsbar />
      <Topdestination />
      <Benefits />
      <Personalized />
      <Newsletter />
    </div>
  );
}
