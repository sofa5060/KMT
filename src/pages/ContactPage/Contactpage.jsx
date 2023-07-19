import React, { useEffect, useContext } from "react";
import "./Contactpage.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Contactform from "../../components/ContactForm/Contactform";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Contactpage({ setCurrPage }) {
  const { renderContent } = useContext(LanguageContext);
  useEffect(() => {
    setCurrPage("contact");
  }, []);

  return (
    <div className="contact-page">
      <div className="left-col">
        <div className="section">
          <h3>
            {renderContent(
              "Chat with us",
              "Chatea con nosotros",
              "Converse conosco"
            )}
          </h3>
          <p>
            {renderContent(
              "Instant Support for Your Travel Needs",
              "Soporte instantáneo para tus necesidades de viaje",
              "Suporte instantâneo para suas necessidades de viagem"
            )}
          </p>
          <div className="row">
            <EmailIcon />
            <a href="mailto:info@kmttoursegypt.com" className="text">
              info@kmttoursegypt.com
            </a>
          </div>
        </div>
        <div className="section">
          <h3>{renderContent("Visit us", "Visítanos", "Visite-nos")}</h3>
          <p>
            {renderContent(
              "Meet Our Travel Experts in Person",
              "Conoce a nuestros expertos en viajes en persona",
              "Conheça nossos especialistas em viagens pessoalmente"
            )}
          </p>
          <div className="row">
            <LocationOnIcon />
            <p className="text">
              {renderContent(
                "8 Gawad Housny st, Abdeen, Cairo Governorate 4280143",
                "8 Gawad Housny st, Abdeen, Gobernación de El Cairo 4280143",
                "8 Gawad Housny st, Abdeen, Governadoria do Cairo 4280143"
              )}
            </p>
          </div>
        </div>
        <div className="section">
          <h3>{renderContent("Call us", "Llámanos", "Ligue para nós")}</h3>
          <p>
            {renderContent(
              "Speak To Our Travel Experts Today",
              "Habla con nuestros expertos en viajes hoy",
              "Fale com nossos especialistas em viagens hoje"
            )}
          </p>
          <div className="row">
            <PhoneIcon />
            <a href="tel:+20223918470" className="text">
              (+20) 2 23918470
            </a>
          </div>
        </div>
        <div className="section">
          <h3>{renderContent("Reach us", "Contáctanos", "Alcance-nos")}</h3>
          <p>{renderContent("We Even Available On Whatsapp", "Incluso estamos disponibles en Whatsapp", "Estamos até disponíveis no Whatsapp")}</p>
          <div className="row">
            <WhatsAppIcon />
            <a
              href="https://api.whatsapp.com/send?phone=201142636629"
              className="text"
              target="_blank"
              rel="noreferrer"
            >
              (+20) 1142636629
            </a>
          </div>
        </div>
      </div>
      <div className="divider">
        <hr />
        <h4>OR</h4>
        <hr />
      </div>
      <Contactform />
    </div>
  );
}
