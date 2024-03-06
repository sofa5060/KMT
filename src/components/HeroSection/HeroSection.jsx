import tailor from "../../images/tailor.svg";
import image from "../../images/egypt1.png";
import background from "../../images/homebackground.png";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="w-full relative py-20">
      <img src={background} alt="" className="w-full h-full absolute" />
      <div className="flex max-w-[1300px] px-12 items-center mx-auto gap-20">
        <div className="flex-1 space-y-5">
          <div className="bg-[#BF904921] bg-opacity-15 flex items-center gap-3 px-6 py-3 rounded-full max-w-max">
            <img src={tailor} alt="" className="w-4 h-4" />
            <h3 className="text-secondary text-sm font-bold">
              Unforgettable Experience with KMT TOURS
            </h3>
          </div>
          <h1 className="text-5xl font-bold">
            Tailor Your Dream <span className="text-primary">EGYPTIAN</span>{" "}
            Trip!
          </h1>
          <p className="text-lg text-text font-ibm">
            Customize every detail of your trip for an unforgettable journey
            through Egypt.
          </p>
          <Link to="/trips" className="btn font-semibold text-base">
            Customize your trip now
          </Link>
        </div>
        <div className="flex-1">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
