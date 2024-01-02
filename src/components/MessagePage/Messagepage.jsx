import React, { useContext } from "react";
import correct from "../../images/correct.png";
import wrong from "../../images/wrong.png";
import { Link } from "react-router-dom";
import "./Messagepage.css";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Messagepage({ type, orderID }) {
  const { renderContent } = useContext(LanguageContext);
  if (type === "paymentSuccess") {
    return (
      <div className="message-container">
        <img src={correct} alt="correct operation" />
        <h2>
          {renderContent(
            "Congratulations! You are All set",
            "¡Felicidades! Todo está listo",
            "Parabéns! Está tudo pronto"
          )}
        </h2>
        <h3>
          {renderContent(
            "Your Booking ID",
            "Tu ID de reserva",
            "O seu ID de reserva"
          )}{" "}
          #{orderID}
        </h3>
        <p>
          {renderContent(
            "Congratulations on completing booking your journey with KMT Tours! We hope you have an amazing time exploring the wonders of Egypt. Remember, your journey with us is not just a one-time experience, but a lifelong memory that you can cherish forever. We encourage you to keep exploring new destinations and experiencing new cultures, and we hope to be a part of your future travel plans. Stay adventurous and keep exploring with KMT Tours!",
            "¡Felicidades por completar la reserva de tu viaje con KMT Tours! Esperamos que tengas un tiempo increíble explorando las maravillas de Egipto. Recuerda, tu viaje con nosotros no es solo una experiencia única, sino un recuerdo para toda la vida que puedes atesorar para siempre. Te animamos a seguir explorando nuevos destinos y experimentando nuevas culturas, y esperamos ser parte de tus futuros planes de viaje. ¡Mantente aventurero y sigue explorando con KMT Tours!",
            "Parabéns por completar a reserva da sua viagem com a KMT Tours! Esperamos que tenha um tempo incrível explorando as maravilhas do Egito. Lembre-se, sua viagem conosco não é apenas uma experiência única, mas uma memória para toda a vida que você pode guardar para sempre. Encorajamos você a continuar explorando novos destinos e experimentando novas culturas, e esperamos fazer parte dos seus futuros planos de viagem. Mantenha-se aventureiro e continue explorando com a KMT Tours!"
          )}
        </p>
        <Link to="/">
          {renderContent(
            "Back To Home Page",
            "Volver a la página de inicio",
            "Voltar para a página inicial"
          )}
        </Link>
      </div>
    );
  } else if (type === "page404") {
    return (
      <div className="message-container" style={{ marginTop: 100 }}>
        <img src={wrong} alt="wrong operation" />
        <h2>
          {renderContent(
            "Page Not Found",
            "Página no encontrada",
            "Página não encontrada"
          )}
        </h2>
        <p>
          {renderContent(
            "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
            "La página que estás buscando podría haber sido eliminada, haber cambiado su nombre o estar temporalmente no disponible.",
            "A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível."
          )}
        </p>
        <Link to="/">
          {renderContent(
            "Back To Home Page",
            "Volver a la página de inicio",
            "Voltar para a página inicial"
          )}
        </Link>
      </div>
    );
  }
}
