import React, { useContext, useEffect, useState } from "react";
import { CookiesBannerContext } from "../../context/CookiesBannerContextProvider";
import { LanguageContext } from "../../context/LanguageContextProvider";

const CookiesBanner = () => {
  const { renderContent } = useContext(LanguageContext);
  const { accepted, acceptCookies, rejectCookies } =
    useContext(CookiesBannerContext);

  const [showBanner, setShowBanner] = useState(!accepted);

  const handleAccept = () => {
    // Logic to handle cookie acceptance
    acceptCookies();
    setShowBanner(false);
  };

  const handleReject = () => {
    // Logic to handle cookie rejection
    rejectCookies();
    setShowBanner(false);
  };

  useEffect(() => {
    setShowBanner(!accepted);
  }, [accepted]);

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-6 z-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold text-primary">
                {renderContent(
                  "This website uses cookies",
                  "Este sitio web utiliza cookies",
                  "Este site usa cookies"
                )}
              </h2>
              <p className="text-sm">
                {renderContent(
                  "We use cookies to ensure you get the best experience on our website.",
                  "Utilizamos cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.",
                  "Usamos cookies para garantir que você obtenha a melhor experiência em nosso site."
                )}
              </p>
            </div>
            <div className="flex space-y-4 gap-4 items-center">
              <button className="btn" onClick={handleAccept}>
                {renderContent("Accept", "Aceptar", "Aceitar")}
              </button>
              <h5
                className="text-sm hover:bg-gray-800 px-3 py-1 rounded cursor-pointer !mt-0"
                onClick={handleReject}
              >
                {renderContent("Reject", "Rechazar", "Rejeitar")}
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiesBanner;
