import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContextProvider";
import bg from "../../images/reviewsbg.png";
import { cn } from "../../lib/utils";
import { HashLink as Link } from "react-router-hash-link";
import ReviewsForm from "../../components/ReviewsForm/ReviewsForm";
import ReviewsList from "../../components/ReviewsList/ReviewsList";

const ReviewsPage = ({ setCurrPage }) => {
  const { renderContent } = useContext(LanguageContext);

  const STATS = [
    {
      number: "9k+",
      text: renderContent(
        "Total Travelers",
        "Viajeros totales",
        "Viajantes totais"
      ),
      className: "top-24 left-[15%]",
    },
    {
      number: "4.9/5",
      text: renderContent(
        "Travelers Satisfaction rate",
        "Satisfacción de los viajeros",
        "Satisfação dos viajantes"
      ),
      className: "top-24 right-[10%] max-xl:right-[5%]",
    },
    {
      number: "1.1k",
      text: renderContent("Total Trips", "Viajes totales", "Viagens totais"),
      className: "top-80 left-1/4",
    },
    {
      number: "100+",
      text: renderContent(
        "Customized Trips",
        "Viajes personalizados",
        "Viagens personalizadas"
      ),
      className: "top-80 right-1/4",
    },
  ];

  useEffect(() => {
    setCurrPage("reviews");
  }, []);

  return (
    <div>
      <div className="relative w-full h-[680px] overflow-hidden max-sm:h-[460px]">
        <img
          src={bg}
          alt="background"
          className="h-full absolute min-w-max w-full max-md:-left-[50%] max-sm:-left-[50%]"
        />
        <div className="absolute left-1/2 top-48 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl font-bold max-md:whitespace-nowrap">
            {renderContent(
              "Our Reviews ★",
              "¡ClaroNuestras reseñas ★",
              "Nossas Avaliações ★"
            )}
          </h1>
          <h2 className="text-2xl mt-6 font-semibold">
            {renderContent(
              "Join Our Thousands of Satisfied Travelers!",
              "¡Únete a nuestros miles de viajeros satisfechos!",
              "Junte-se aos nossos milhares de viajantes satisfeitos!"
            )}
          </h2>
        </div>
        {STATS.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "text-start absolute max-md:hidden flex flex-col gap-4",
              stat.className
            )}
          >
            <h3 className="text-[#72451B] font-bold font-golos text-5xl">
              {stat.number}
            </h3>
            <h4>{stat.text}</h4>
          </div>
        ))}
      </div>
      <div className="flex max-w-screen-md px-10 mb-16 mt-20 mx-auto justify-between items-center max-sm:flex-wrap max-sm:gap-4">
        <h3 className="font-semibold text-lg">
          {renderContent(
            "KMT Tours Reviews",
            "Reseñas de KMT Tours",
            "Avaliações da KMT Tours"
          )}
        </h3>
        <Link
          to="reviews#form"
          className="border border-primary text-primary py-5 px-11 ease-in-out transition-all hover:bg-primary hover:text-white whitespace-nowrap"
        >
          {renderContent(
            "Write A Review",
            "Escribe una reseña",
            "Escreva uma avaliação"
          )}
        </Link>
      </div>
      <ReviewsList />
      <ReviewsForm />
    </div>
  );
};
export default ReviewsPage;
