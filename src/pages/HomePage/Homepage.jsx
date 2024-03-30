import React, { useEffect, useContext } from "react";
import "react-slideshow-image/dist/styles.css";
import "./Homepage.css";
import Statsbar from "../../components/StatsBar/Statsbar";
import Topdestination from "../../components/TopDestinations/Topdestination";
import Imageslider from "../../components/ImageSlider/Imageslider";
import Benefits from "../../components/Benefits/Benefits";
import Newsletter from "../../components/Newsletter/Newsletter";
import Personalized from "../../components/Personalized/Personalized";
import { SearchContext } from "../../context/SearchContextProvider";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import PopularPlaces from "../../components/PopularPlaces/PopularPlaces";
import { useFeatureFlagEnabled } from "posthog-js/react";

export default function Homepage({ setCurrPage }) {
  const { setIsSearched } = useContext(SearchContext);
  useEffect(() => {
    setCurrPage("home");
    setIsSearched(false);
  }, []);

  const flagEnabled = useFeatureFlagEnabled("custom-trips");

  console.log(flagEnabled);

  return (
    <div className="homepage">
      {flagEnabled ? (
        <>
          <HeroSection />
          <PopularPlaces />
          <HowItWorks />
        </>
      ) : (
        <>
          <Imageslider />
          <Statsbar />
          <Topdestination />
        </>
      )}
      <Benefits />
      <Personalized />
      <Newsletter />
    </div>
  );
}
