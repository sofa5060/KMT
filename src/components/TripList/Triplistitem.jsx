import React,{useContext} from "react";
import { Link } from "react-router-dom";
import location from "../../images/location.svg";
import price from "../../images/price.svg";
import EastIcon from "@mui/icons-material/East";
import "./Triplistitem.css";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Triplistitem({ trip }) {
  const { contextLanguage } = useContext(LanguageContext);
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
    <div className="trip-list-item">
      <div className="trip-image">
        <img src={trip.overViewImage} alt="" />
      </div>
      <div className="trip-info">
        <h3>{trip[contextLanguage].title}</h3>
        <p>{trip[contextLanguage].overView}</p>
        <div className="features">
          <div className="feature">
            <img src={location} alt="" />
            <h5>{displayCities(trip.cities)}</h5>
          </div>
          <hr />
          <div className="feature">
            <img src={price} alt="" />
            <h5>${trip.price.toFixed(2)}</h5>
          </div>
        </div>
        <Link to={`/trip/${trip.id}`}>
          Explore More <EastIcon />
        </Link>
      </div>
    </div>
  );
}
