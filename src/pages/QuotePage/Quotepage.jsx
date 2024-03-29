import React, { useContext, useEffect } from "react";
import Quotepageform from "../../components/QuotePageForm/Quotepageform";
import "./Quotepage.css";
import quote_background from "../../images/quote_background.png";
import { LanguageContext } from "../../context/LanguageContextProvider";
import { getAnalytics, logEvent } from "firebase/analytics";
import { CookiesBannerContext } from "../../context/CookiesBannerContextProvider";

export default function Quotepage({ setCurrPage }) {
  const { renderContent } = useContext(LanguageContext);
  const {accepted} = useContext(CookiesBannerContext);

  const analytics = getAnalytics();

  useEffect(() => {
    setCurrPage("quote");

    const item = {
      value: 1,
    };

    if(accepted){
      // Log event
      logEvent(analytics, "custom_trip_start", item);
    }
  }, []);

  return (
    <div className="quote-page">
      <div className="background">
        <img src={quote_background} alt="" />
      </div>
      <div className="form-container">
        <h1>
          {renderContent(
            "Request a Quote",
            "Solicitar un presupuesto",
            "Solicitar um orçamento"
          )}
        </h1>
        <p className="quote-text">
          {renderContent(
            "At KMT Tours, we understand that every traveler has different needs and preferences when it comes to planning their trip to Egypt. That's why we offer a customized tour experience that's tailored to your specific requirements. To receive a personalized quote for your trip, simply fill out our request form and we'll get back to you with a customized itinerary and quote.",
            "En KMT Tours, entendemos que cada viajero tiene necesidades y preferencias diferentes cuando se trata de planificar su viaje a Egipto. Por eso ofrecemos una experiencia de turismo personalizada que se adapta a sus requisitos específicos. Para recibir un presupuesto personalizado para su viaje, simplemente complete nuestro formulario de solicitud y nos pondremos en contacto con usted con un itinerario y presupuesto personalizado.",
            "Na KMT Tours, entendemos que cada viajante tem necessidades e preferências diferentes quando se trata de planejar sua viagem ao Egito. É por isso que oferecemos uma experiência de turismo personalizada, adaptada às suas necessidades específicas. Para receber um orçamento personalizado para sua viagem, basta preencher nosso formulário de solicitação e entraremos em contato com você com um itinerário e orçamento personalizados."
          )}
        </p>
        <div className="form-background">
          <Quotepageform />
        </div>
      </div>
    </div>
  );
}
