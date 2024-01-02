import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import "./Topdestination.css";
import axios from "axios";
import "animate.css/animate.min.css";
import Cardlist from "../CardList/Cardlist";
import { useMediaQuery } from "@mui/material";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Topdestination() {
  const [destinations, setDestinations] = useState(null);
  const { renderContent } = useContext(LanguageContext);

  const matches = useMediaQuery("(max-width:1000px)");

  const getTopDestinations = async () => {
    if (destinations) return;
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/trips/top`
      );
      setDestinations(response.data);
    } catch (e) {
      // setNotFound(true);
      console.log(e);
    }
  };

  useEffect(() => {
    getTopDestinations();
  }, []);

  return (
    <div className="top-destination">
      <h3>
        {renderContent(
          "Top Destinations",
          "Destinos principales",
          "Principais destinos"
        )}
      </h3>
      <p>
        {renderContent(
          "Journey Through Time: Explore Egypt's Most Iconic Sites with KMT Tours!",
          "Viaje a través del tiempo: ¡Explore los sitios más emblemáticos de Egipto con KMT Tours!",
          "Viagem Através do Tempo: Explore os Locais Mais Icônicos do Egito com a KMT Tours!"
        )}
      </p>
      {destinations ? (
        <Cardlist destinations={destinations} />
      ) : (
        <div className="row">
          <Skeleton animation="wave" width={360} height={matches ? 240 : 400} />
          <Skeleton animation="wave" width={360} height={matches ? 240 : 400} />
          <Skeleton animation="wave" width={360} height={matches ? 240 : 400} />
        </div>
      )}
      <Link to="/trips" className="btn">
        {renderContent(
          "Show More Destinations",
          "Muestra más destinos",
          "Mostre mais destinos"
        )}
      </Link>
    </div>
  );
}
