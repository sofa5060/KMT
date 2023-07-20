import React, { useState, useEffect, useContext } from "react";
import "./Customerdetails.css";
import { CheckoutContext } from "../../context/CheckoutContextProvider";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Customersdetails({handleNext, handleBack}) {
  const [guestsInfo, setGuestsInfo] = useState([]);

  const { contextGuestsInfo } = useContext(CheckoutContext);
  const { renderContent } = useContext(LanguageContext);

  useEffect(() => {
    if (contextGuestsInfo.length > 0) {
      setGuestsInfo(contextGuestsInfo);
    }
  }, [contextGuestsInfo]);

  if (guestsInfo.length === 0) return;

  return (
    <div className="customers-details">
      {guestsInfo.map((guest, index) => (
        <div className="customer-details" key={index}>
          <h2>#{index + 1} {renderContent("Person Information", "Información de la persona", "Informações da pessoa")}</h2>
          <div className="information">
            <div className="information-col headers">
              <h3>{renderContent("Full Name", "Nombre completo", "Nome completo")}:</h3>
              <h3>{renderContent("Email Address", "Dirección de correo electrónico", "Endereço de e-mail")}:</h3>
              {guest.phone && <h3>Phone Number:</h3>}
              <h3>{renderContent("Nationality", "Nacionalidad", "Nacionalidade")}:</h3>
              <h3>{renderContent("Age", "Edad", "Idade")}:</h3>
              {guest.msg && <h3>{renderContent("Special Request", "Petición especial", "Pedido especial")}:</h3>}
            </div>
            <div className="information-col">
              <p>
                {guest.firstName} {guest.lastName}{" "}
              </p>
              <p>{guest.email}</p>
              {guest.phone && <p>{guest.phone}</p>}
              <p>{guest.nationality}</p>
              <p>{guest.age} {renderContent("Years Old", "años", "anos")}</p>
              {guest.msg && <p>{guest.msg}</p>}
            </div>
          </div>
        </div>
      ))}
      <div className="btns">
        <button className="btn outlined" onClick={handleBack}>{renderContent("Back", "Atrás", "Voltar")}</button>
        <button className="btn" onClick={handleNext}>{renderContent("Proceed To Payment", "Proceder al pago", "Proceder ao pagamento")}</button>
      </div>
    </div>
  );
}
