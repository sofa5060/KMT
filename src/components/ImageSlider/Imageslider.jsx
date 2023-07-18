import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import nextArrowIcon from "../../images/next.svg";
import prevArrowIcon from "../../images/prev.svg";
import "./Imageslider.css";
import Searchbox from "../SearchBox/Searchbox";
import dayjs from "dayjs";
import { SearchContext } from "../../context/SearchContextProvider";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Imageslider() {
  const history = useHistory();
  const images = [
    {
      imageLink: "https://i.ibb.co/sq6HF7b/Egypt-Modified-1.png",
      cityName: "Pyramids of Giza",
      searchTerm: "Giza",
    },
    {
      imageLink: "https://i.ibb.co/n3wfCGb/Egypt-Modified-2.png",
      cityName: "Aswan",
      searchTerm: "Aswan",
    },
  ];

  const { setContextDate, setContextGuests, setIsWaitingForSearch } =
    useContext(SearchContext);

  const { renderContent } = useContext(LanguageContext);

  const properties = {
    prevArrow: (
      <div className="arrow left-arrow">
        <img src={prevArrowIcon} alt="" />
      </div>
    ),
    nextArrow: (
      <div className="arrow right-arrow">
        <img src={nextArrowIcon} alt="" />
      </div>
    ),
    pauseOnHover: true,
    infinite: true,
    autoplay: true,
  };

  const handleClick = (searchTerm) => {
    setContextDate(dayjs());
    setContextGuests(1);
    setIsWaitingForSearch(true);
    history.push(`/search/${searchTerm}`);
  };

  return (
    <div className="image-slider">
      <Fade {...properties}>
        {images.map((img) => {
          return (
            <div className="each-slide" key={img.cityName}>
              <img src={img.imageLink} alt={img.cityName} />
              <div className="slider-content">
                <h4>KMT TOURS</h4>
                <h1>
                  {renderContent(
                    "Explore New Places of ",
                    "¡Explora nuevos lugares de ",
                    "Explore novos lugares do "
                  )}
                  <span>{renderContent("EGYPT", "EGIPTO", "EGIPTO")}!</span>
                </h1>
                <h3>
                  {renderContent(
                    "Get a taste of the past on our trips to Egypt, where you’ll take a walk through the footsteps of the pharaohs through ancient temples and monuments.",
                    "Obtenga un sabor del pasado en nuestros viajes a Egipto, donde dará un paseo por los pasos de los faraones a través de antiguos templos y monumentos.",
                    "Obtenha um gostinho do passado em nossas viagens ao Egito, onde você fará uma caminhada pelos passos dos faraós por meio de templos e monumentos antigos."
                  )}
                </h3>
                <div className="slider">
                  <span onClick={() => handleClick(img.searchTerm)}>
                    {img.cityName}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Fade>
      <Searchbox />
    </div>
  );
}
