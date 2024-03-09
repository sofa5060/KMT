import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import background from "../../images/homebackground.png";
import image1 from "../../images/Rectangle77.png";
import image2 from "../../images/Rectangle78.png";
import image3 from "../../images/Rectangle79.png";
import image4 from "../../images/Rectangle80.png";
import icon1 from "../../images/pyramids1.png";
import icon2 from "../../images/luxor1.png";
import icon3 from "../../images/boat1.png";
import icon4 from "../../images/museum1.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContextProvider";

const PopularPlaces = () => {
  const { renderContent } = useContext(LanguageContext);
  const ITEMS = [
    {
      image: image1,
      icon: icon1,
      title: renderContent("Pyramids", "Pirámides", "Pirâmides"),
      searchTerm: "pyramids",
    },
    {
      image: image2,
      icon: icon2,
      title: renderContent(
        "Luxor Temples",
        "Templos de Luxor",
        "Templos de Luxor"
      ),
      searchTerm: "Luxor",
    },
    {
      image: image3,
      icon: icon3,
      title: renderContent("Aswan Boats", "Barcos de Aswan", "Barcos de Aswan"),
      searchTerm: "Aswan",
    },
    {
      image: image4,
      icon: icon4,
      title: renderContent("Museum", "Museo", "Museu"),
      searchTerm: "Museum",
    },
  ];

  return (
    <div className="w-full relative">
      <img
        src={background}
        alt=""
        className="min-w-full object-cover h-full absolute"
      />
      <div className="max-w-[1300px] p-12 mx-auto max-sm:px-4">
        <Carousel className="w-full">
          <div className="flex mb-8 items-end gap-12 w-full justify-between max-sm:gap-8 max-sm:flex-col">
            <div className="max-w-[750px]">
              <h2 className="text-5xl font-ibm font-bold mb-2.5 max-md:text-3xl">
                {renderContent(
                  "Explore Places and Plan a Perfect Holiday",
                  "Explora lugares y planifica unas vacaciones perfectas",
                  "Explore lugares e planeje um feriado perfeito"
                )}
              </h2>
              <p className="text-text text-lg max-md:text-base">
                {renderContent(
                  "we believe that travel should be as unique as you are. That's why we specialize in crafting bespoke Egyptian tours, meticulously designed to match your interests, schedule, and budget.",
                  "creemos que los viajes deben ser tan únicos como tú. Es por eso que nos especializamos en la creación de tours egipcios a medida, meticulosamente diseñados para adaptarse a tus intereses, horario y presupuesto.",
                  "acreditamos que a viagem deve ser tão única quanto você. É por isso que nos especializamos em criar passeios egípcios sob medida, meticulosamente projetados para combinar com seus interesses, horário e orçamento."
                )}
              </p>
            </div>
            <div className="flex items-center justify-center max-w-24 gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent className="-ml-6">
            {ITEMS.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 pl-6"
              >
                <div className="grid place-items-center">
                  <Link
                    to={`/search/${item.searchTerm}`}
                    className="max-w-max grid place-items-center"
                  >
                    <div className="z-0 relative max-w-72">
                      <img
                        src={item.image}
                        alt=""
                        className="aspect-[4/5] z-0 rounded-full shadow-xl relative"
                      />
                    </div>
                    <div className="text-center z-30 relative">
                      <div className="w-[75px] h-[75px] bg-white grid place-items-center rounded-full mx-auto -mt-12 z-30">
                        <img src={item.icon} alt="" className="h-10 w-10" />
                      </div>
                      <p className="text-primary font-medium mt-2.5">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
export default PopularPlaces;
