import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContextProvider";
import bg from "../../images/reviewsbg.png";
import { cn } from "../../lib/utils";
import { HashLink as Link } from "react-router-hash-link";
import ReviewsForm from "../../components/ReviewsForm/ReviewsForm";
import ReviewsList from "../../components/ReviewsList/ReviewsList";

const STATS = [
  {
    number: "9k+",
    text: "Total Travelers",
    className: "top-20 left-80",
  },
  {
    number: "4.9/5",
    text: "Travelers Satisfaction rate",
    className: "top-20 right-80",
  },
  {
    number: "1.1k",
    text: "Total Trips",
    className: "top-80 left-96",
  },
  {
    number: "100+",
    text: "Customized Trips",
    className: "top-80 right-96",
  },
];

const ReviewsPage = ({ setCurrPage }) => {
  const { renderContent } = useContext(LanguageContext);

  useEffect(() => {
    setCurrPage("reviews");
  }, []);

  return (
    <div>
      <div className="relative w-full h-[680px]">
        <img src={bg} alt="background" className="min-w-full h-full absolute" />
        <div className="absolute left-1/2 top-48 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl font-bold">Our Reviews ★</h1>
          <h2 className="text-2xl mt-6 font-semibold">
            Join Our Thousands of Satisfied Travelers!
          </h2>
        </div>
        {STATS.map((stat, index) => (
          <div
            key={index}
            className={cn("text-start absolute", stat.className)}
          >
            <h3 className="text-[#72451B] font-bold font-golos text-[54px]">
              {stat.number}
            </h3>
            <h4>{stat.text}</h4>
          </div>
        ))}
      </div>
      <div className="flex max-w-screen-md px-10 mb-16 mt-20 mx-auto justify-between items-center">
        <h3 className="font-semibold text-lg">KMT Tours Reviews</h3>
        <Link
          to="reviews#form"
          className="border border-primary text-primary py-5 px-11 ease-in-out transition-all hover:bg-primary hover:text-white"
        >
          Write A Review
        </Link>
      </div>
      <ReviewsList />
      <ReviewsForm />
    </div>
  );
};
export default ReviewsPage;
