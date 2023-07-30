import React, { useContext } from "react";
import location from "../../images/location.svg";
import price from "../../images/price.svg";
import "./Card.css";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { LanguageContext } from "../../context/LanguageContextProvider";
import Prices from "../../models/Prices";

export default function Card({ data }) {
  const { contextLanguage, renderContent } = useContext(LanguageContext);

  const displayCities = (cities) => {
    let result = "";
    for (let i = 0; i < cities.length && i < 3; i++) {
      if (i === cities.length - 1 || i === 2) {
        result += cities[i];
      } else {
        result += cities[i] + ", ";
      }
    }
    return result;
  };
  return (
    <div className="card-outer">
      <div className="card">
        <div className="card-content">
          <img src={data.overViewImage} alt="" className="header-image" />
          <h4>{data[contextLanguage].title}</h4>
          <p>{data[contextLanguage].overView}</p>
        </div>
        <div className="features">
          <div className="feature">
            <img src={location} alt="" />
            <h5>{displayCities(data.cities)}</h5>
          </div>
          <hr />
          <div className="feature">
            <img src={price} alt="" />
            <h5>${new Prices(data.prices).getPrice(1)}</h5>
          </div>
        </div>
      </div>
      <Link to={`/trip/${data.id}`} className="btn" id="explore-btn">
        {renderContent("Explore More", "Explora más", "Explore mais")}{" "}
        <EastIcon />
      </Link>
    </div>
  );
}
