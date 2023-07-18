import React, { useState, useContext } from "react";
import "./Newsletter.css";
import newsletterIcon from "../../images/newsletterIcon.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import axios from "axios";
import { AlertContext } from "../../context/AlertContextProvider";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { showAlert } = useContext(AlertContext);
  const { renderContent } = useContext(LanguageContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res;
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/newsletter`, {
        name,
        email,
      });
    } catch (e) {
      if (e.code !== "ERR_NETWORK" && e.response.status === 500) {
        return showAlert("error", e.response.data);
      }

      return showAlert("error", "Error in submitting the form");
    }

    setName("");
    setEmail("");
    showAlert("success", "Submitted Successfully");
  };

  return (
    <div className="newsletter">
      <div className="icon-background">
        <div className="icon">
          <img src={newsletterIcon} alt="" />
        </div>
      </div>
      <h3>
        <span>{renderContent("Unlock the Wonders of Egypt", "Descubre las maravillas de Egipto", "Desbloqueie as maravilhas do Egito")}</span>
        <br />
        <AnimationOnScroll
          animateOut="animate__headShake show"
          style={{ opacity: 1, zIndex: 1 }}
          offset={300}
          initiallyVisible
        >
          {renderContent("Get Exclusive Tour Offers and Tips", "Obtén ofertas exclusivas de tours y consejos", "Obtenha ofertas exclusivas de tours e dicas")}
        </AnimationOnScroll>
      </h3>
      <p>
        {renderContent(
          "Our newsletter is a great way to stay connected with us and stay up-to-date on everything Egypt has to offer. Plus, as a subscriber, you'll be the first to hear about our exclusive promotions and discounts. Don't miss out - sign up today!",
          "Nuestro boletín es una excelente manera de mantenerte conectado con nosotros y mantenerte al día sobre todo lo que Egipto tiene para ofrecer. Además, como suscriptor, serás el primero en conocer nuestras promociones y descuentos exclusivos. ¡No te lo pierdas, suscríbete hoy!",
          "Nossa newsletter é uma ótima maneira de se manter conectado conosco e se manter atualizado sobre tudo o que o Egito tem a oferecer. Além disso, como assinante, você será o primeiro a ouvir sobre nossas promoções e descontos exclusivos. Não perca - inscreva-se hoje!"
        )}
      </p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={renderContent("Full Name", "Nombre completo", "Nome completo")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn">{renderContent("Subscribe", "Suscribirse", "Inscreva-se")}</button>
      </form>
    </div>
  );
}
