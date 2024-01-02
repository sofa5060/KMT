import React, { useContext } from "react";
import temple from "../../images/temple.svg";
import convenient from "../../images/convenient.svg";
import experts from "../../images/experts.svg";
import guide from "../../images/guide.svg";
import "./Benefits.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Benefits() {
  const { renderContent } = useContext(LanguageContext);
  return (
    <div className="benefits">
      <h1>
        {renderContent(
          "Why Travel with ",
          "Por qué viajar con ",
          "Por que viajar com a "
        )}
        <span>KMT Tours</span>
      </h1>
      <section>
        <div className="left">
          <img src={temple} alt="" className="main-image" />
        </div>
        <div className="right">
          <div className="point">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              duration={0.7}
              animateOnce
            >
              <div className="benefit">
                <img src={experts} alt="" />
                <h4>
                  {renderContent(
                    "Hassle-free experience",
                    "Experiencia sin problemas",
                    "Experiência sem complicações"
                  )}
                </h4>
              </div>
            </AnimationOnScroll>
            <p>
              {renderContent(
                "We take care of everything, from transportation to accommodation, so you can relax and enjoy your trip. Our team is available 24/7 to answer any questions or concerns you may have.",
                "Nos encargamos de todo, desde el transporte hasta el alojamiento, para que puedas relajarte y disfrutar de tu viaje. Nuestro equipo está disponible 24/7 para responder cualquier pregunta o inquietud que puedas tener.",
                "Cuidamos de tudo, desde o transporte até a acomodação, para que você possa relaxar e aproveitar sua viagem. Nossa equipe está disponível 24/7 para responder a qualquer pergunta ou preocupação que você possa ter."
              )}
            </p>
          </div>
          <div className="point">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              duration={0.7}
              animateOnce
            >
              <div className="benefit">
                <img src={guide} alt="" />
                <h4>
                  {renderContent(
                    "Unmatched Expertise",
                    "Experiencia inigualable",
                    "Experiência incomparável"
                  )}
                </h4>
              </div>
            </AnimationOnScroll>
            <p>
              {renderContent(
                "Our team consists of experienced tour guides who know Egypt like the back of their hands. We'll take you to hidden gems and famous landmarks alike, and share fascinating stories about each place you visit.",
                "Nuestro equipo está formado por guías turísticos experimentados que conocen Egipto como la palma de sus manos. Te llevaremos a gemas ocultas y lugares famosos por igual, y compartiremos historias fascinantes sobre cada lugar que visites.",
                "Nossa equipe é composta por guias turísticos experientes que conhecem o Egito como a palma de suas mãos. Levaremos você a joias escondidas e famosos marcos igualmente, e compartilharemos histórias fascinantes sobre cada lugar que você visitar."
              )}
            </p>
          </div>
          <div className="point">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              duration={0.7}
              animateOnce
            >
              <div className="benefit">
                <img src={convenient} alt="" />
                <h4>
                  {renderContent(
                    "Personalized tours",
                    "Viajes personalizados",
                    "Viagens personalizadas"
                  )}
                </h4>
              </div>
            </AnimationOnScroll>
            <p>
              {renderContent(
                "We believe that every traveler is unique, and that's why we offer customizable tours. Whether you want to focus on ancient history or modern-day culture, we'll tailor the tour to your preferences.",
                "Creemos que cada viajero es único, y por eso ofrecemos tours personalizables. Ya sea que quieras centrarte en la historia antigua o en la cultura moderna, adaptaremos el tour a tus preferencias.",
                "Acreditamos que cada viajante é único, e é por isso que oferecemos tours personalizáveis. Quer você queira se concentrar na história antiga ou na cultura moderna, adaptaremos o tour às suas preferências."
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
