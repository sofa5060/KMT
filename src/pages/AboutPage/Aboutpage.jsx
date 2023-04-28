import React, { useEffect } from "react";
import aboutImg from "../../images/aboutImg.png";
import aboutImg2 from "../../images/aboutImg2.png";
import aboutImg3 from "../../images/aboutImg3.png";
import "./Aboutpage.css";
import Newsletter from "../../components/Newsletter/Newsletter";

export default function Aboutpage({ setCurrPage }) {
  useEffect(() => {
    setCurrPage("about");
  }, [setCurrPage]);
  return (
    <div className="about-page">
      <h3 className="sub-title">About Us</h3>
      <div className="section1">
        <div className="img-container">
          <img src={aboutImg} alt="" />
        </div>
        <div className="section1-content">
          <h2>Your Guide to Authentic Egyptian Travel</h2>
          <p>
            KMT Tours is an Egyptian tours company that offers a wide range of
            travel services to explore the beauty and history of Egypt. Our
            mission is to provide our clients with unforgettable experiences and
            a hassle-free trip to Egypt, by offering high-quality travel
            services, customized itineraries, and exceptional customer service.
          </p>
          <p>
            In addition to our travel services, we also offer a range of travel
            resources to help you plan your trip to Egypt. These include
            destination guides, travel tips, and recommendations for things to
            do and see in Egypt.
          </p>
        </div>
      </div>
      <div className="section2">
        <div className="row">
          <img src={aboutImg2} alt="" />
          <div className="section2-content right-p">
            <h3>Our Vision</h3>
            <p>
              At KMT Tours, our vision is to become the premier provider of
              personalized and authentic travel experiences in Egypt,
              distinguished by our commitment to excellence, innovation, and
              social responsibility. We aspire to be the travel company of
              choice for those seeking to explore Egypt's rich history, diverse
              culture, and stunning natural landscapes, and to promote cultural
              exchange and understanding between people from different parts of
              the world. We strive to exceed our clients' expectations at every
              step of their journey, and to leave a positive and lasting impact
              on the communities we visit.
            </p>
          </div>
        </div>
        <div className="row reverse">
          <div className="section2-content left-p">
            <h3>Our Mission</h3>
            <p>
              At KMT Tours, we are dedicated to creating unforgettable travel
              experiences that allow our guests to discover the beauty,
              richness, and diversity of Egypt's history, culture, and
              landscapes. We believe that travel has the power to broaden
              horizons, foster cultural exchange and understanding, and inspire
              personal growth and transformation.
            </p>
            <p>
              To achieve our mission, we are committed to providing exceptional
              customer service and personalized attention to each of our
              clients, from the moment they first contact us until they return
              home. We understand that every traveler is unique, with their own
              interests, needs, and preferences, and we strive to tailor our
              tours to meet those individual needs.
            </p>
          </div>
          <img src={aboutImg3} alt="" />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
