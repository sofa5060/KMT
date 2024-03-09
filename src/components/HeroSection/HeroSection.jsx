import tailor from "../../images/tailor.svg";
import image from "../../images/egypt1.png";
import background from "../../images/homebackground.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContextProvider";

export const HeroSection = () => {
  const { renderContent } = useContext(LanguageContext);
  return (
    <div className="w-full relative">
      <img
        src={background}
        alt=""
        className="min-w-full h-full object-cover absolute"
      />
      <div className="flex max-w-[1300px] px-12 items-center mx-auto gap-20 py-20 z-20 relative max-md:flex-col-reverse max-sm:px-4">
        <div className="flex-1 space-y-5">
          <div className="bg-[#BF904921] bg-opacity-15 flex items-center gap-3 px-6 py-3 rounded-full max-w-max">
            <img src={tailor} alt="" className="w-4 h-4" />
            <h3 className="text-secondary text-sm font-bold">
              {renderContent(
                "Unforgettable Experience with KMT TOURS",
                "Experiencia inolvidable con KMT TOURS",
                "Experiência inesquecível com KMT TOURS"
              )}
            </h3>
          </div>
          <h1 className="text-5xl font-bold max-md:text-3xl">
            {renderContent(
              "Tailor Your Dream ",
              "Adapta tu sueño ",
              "Adapte seu sonho "
            )}
            <span className="text-primary">
              {renderContent("EGYPTIAN", "EGIPCIO", "EGÍPCIO")}
            </span>
            {renderContent(" Trip!", " Viaje!", " Viagem!")}
          </h1>
          <p className="text-lg text-text font-ibm">
            {renderContent(
              "Customize every detail of your trip for an unforgettable journey through Egypt.",
              "Personaliza cada detalle de tu viaje para un viaje inolvidable por Egipto.",
              "Personalize todos os detalhes da sua viagem para uma jornada inesquecível pelo Egito."
            )}
          </p>
          <Link
            to="/quote"
            className="btn font-semibold text-base !max-sm:px-2"
          >
            {renderContent(
              "Customize Your Trip Now!",
              "Personaliza tu viaje ahora!",
              "Personalize sua viagem agora!"
            )}
          </Link>
        </div>
        <div className="flex-1">
          <img src={image} className="mx-auto max-md:max-w-80" alt="" />
        </div>
      </div>
    </div>
  );
};
