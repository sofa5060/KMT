import image1 from "../../images/howitworks1.png";
import image2 from "../../images/howitworks2.png";
import image3 from "../../images/howitworks3.png";
import image4 from "../../images/howitworks4.png";
import { cn } from "../../lib/utils";

const STEPS = [
  {
    title: "Initiate Your Custom Journey",
    descriptionTitle1: "Customization Form:",
    description1:
      " Begin by filling out our detailed customization form on our website. This form is designed to capture your interests, preferences, travel dates, budget, and any special requests you might have.",
    descriptionTitle2: "Consultation with Travel Experts:",
    description2:
      "Prefer a more personal touch? Schedule a consultation with one of our travel experts. During this session, we'll discuss your travel goals, preferences, and any specific needs or desires you have for your trip.",
    image: image1,
    leftClassName: "mr-auto",
    rightClassName: "ml-auto text-right",
  },
  {
    title: "Design Your Personalized Itinerary",
    descriptionTitle1: "Personalized Tour Plan:",
    description1:
      "Based on the information you've shared, our team of expert travel planners will craft a preliminary tour plan tailored just for you.",
    descriptionTitle2: "Interactive Tools:",
    description2:
      "We provide interactive tools on our website, allowing you to explore potential itinerary adjustments in real-time. Discover alternative activities, adjust your travel dates, or modify your accommodation preferences at the click of a button.",
    image: image2,
    leftClassName: "ml-auto",
    rightClassName: "mr-auto",
  },
  {
    title: "Finalize Your Tailored Experience",
    descriptionTitle1: "Iterative Review Process:",
    description1:
      "Once you receive your preliminary itinerary, we enter the iterative review process. Here, you can provide feedback, request changes, or add new destinations and activities",
    descriptionTitle2: "Final Approval:",
    description2:
      "With your input, we'll refine your itinerary to perfection. You'll receive a detailed final itinerary that includes all bookings, reservations, and a comprehensive travel guide tailored to your trip.",
    image: image3,
    leftClassName: "mr-auto",
    rightClassName: "ml-auto text-right",
  },
  {
    title: "Start Your Egyptian Adventure",
    descriptionTitle1: "Begin Your Adventure:",
    description1:
      "With your tailored itinerary in hand, you're ready to experience Egypt like never before. From the moment you land, our team ensures your trip runs smoothly. We offer support throughout your journey, from providing local guides to 24/7 customer service for any inquiries or assistance you might need.",
    descriptionTitle2: "Beyond the Journey:",
    description2:
      "Our commitment to you doesn't end when your trip does. After your return, we'll reach out for feedback to learn about your experiences. Your insights help us refine our services and assist future travelers in creating their perfect Egyptian adventures.",
    image: image4,
    leftClassName: "ml-auto",
    rightClassName: "mr-auto",
  },
];

export const HowItWorks = () => {
  return (
    <div className="mt-24">
      <h3 className="text-4xl font-bold text-center">How it works</h3>
      <div className="bg-[#171508] rounded-3xl mx-8 mt-8 py-24">
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white"></div>
          <div className="space-y-40">
            {STEPS.map((step, index) => (
              <div
                className={cn(
                  "flex justify-center px-20 gap-24 mx-auto items-center",
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                )}
                key={index}
              >
                <div className="flex-1 max-h-max">
                  <img
                    src={step.image}
                    alt="how it works"
                    className={cn("max-w-[480px]", step.leftClassName)}
                  />
                </div>
                <div className="flex-1 max-h-max">
                  <div
                    className={cn(
                      "text-white max-w-[550px]",
                      step.rightClassName
                    )}
                  >
                    <h4 className="bg-primary text-2xl font-bold rounded-full inline-block w-[64px] h-[64px] text-center pt-4">
                      {index + 1}
                    </h4>
                    <h3 className="text-2xl font-bold mt-12">{step.title}</h3>
                    <p className="mt-3 font-normal text-sm">
                      <span className="text-primary font-bold">
                        {step.descriptionTitle1}
                      </span>
                      {step.description1}
                    </p>
                    <p className="mt-3 font-normal text-sm">
                      <span className="text-primary font-bold">
                        {step.descriptionTitle2}
                      </span>
                      {step.description2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
