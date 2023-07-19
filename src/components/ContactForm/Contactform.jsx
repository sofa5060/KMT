import React, { useContext, useState } from "react";
import "./Contactform.css";
import TextField from "@mui/material/TextField";
import { AlertContext } from "../../context/AlertContextProvider";
import axios from "axios";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Contactform() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const { showAlert } = useContext(AlertContext);
  const { renderContent } = useContext(LanguageContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !emailAddress || !message) {
      return showAlert("error", "Please fill all the fields");
    }

    let res;
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        name: firstName + " " + lastName,
        email: emailAddress,
        message,
      });
    } catch (e) {
      return showAlert("error", "Error in submitting the form");
    }

    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setMessage("");
    showAlert("success", "Submitted Successfully");
  };

  return (
    <div className="contact-form">
      <h2>
        {renderContent(
          "Connect with KMT Tours Get in Touch Today!",
          "Conéctate con KMT Tours ¡Ponte en contacto hoy!",
          "Conecte-se com KMT Tours Entre em contato hoje!"
        )}
      </h2>
      <p>
        {renderContent(
          "Whether you have questions about our tours, want to request a quote, or simply need more information about traveling to Egypt, we're here to help. Our team of friendly and knowledgeable travel experts is available to assist you with all your travel needs. Contact us today and let us help you plan an unforgettable trip to Egypt!",
          "Ya sea que tengas preguntas sobre nuestros tours, quieras solicitar una cotización, o simplemente necesites más información sobre cómo viajar a Egipto, estamos aquí para ayudarte. Nuestro equipo de expertos en viajes amigables y conocedores está disponible para ayudarte con todas tus necesidades de viaje. Contáctanos hoy y permítenos ayudarte a planificar un viaje inolvidable a Egipto!",
          "Se você tem perguntas sobre nossos passeios, quer solicitar uma cotação, ou simplesmente precisa de mais informações sobre como viajar para o Egito, estamos aqui para ajudar. Nossa equipe de especialistas em viagens amigáveis e conhecedores está disponível para ajudá-lo com todas as suas necessidades de viagem. Contate-nos hoje e deixe-nos ajudá-lo a planejar uma viagem inesquecível para o Egito!"
        )}
      </p>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <TextField
            label={renderContent(
              "First Name",
              "Primer nombre",
              "Primeiro nome"
            )}
            required
            fullWidth
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <TextField
            label={renderContent("Last Name", "Apellido", "Último nome")}
            required
            fullWidth
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <TextField
          label={renderContent(
            "Email Address",
            "Dirección de correo electrónico",
            "Endereço de e-mail"
          )}
          type="email"
          required
          fullWidth
          onChange={(e) => setEmailAddress(e.target.value)}
          value={emailAddress}
        />
        <TextField
          label={renderContent(
            "Write Your Message",
            "Escribe tu mensaje",
            "Escreva sua mensagem"
          )}
          multiline
          required
          fullWidth
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="btn">
          {renderContent("Submit", "Enviar", "Enviar")}
        </button>
      </form>
    </div>
  );
}
