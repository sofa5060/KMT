import React, { useEffect, useContext } from "react";
import aboutImg from "../../images/aboutImg.png";
import aboutImg2 from "../../images/aboutImg2.png";
import aboutImg3 from "../../images/aboutImg3.png";
import "./Aboutpage.css";
import Newsletter from "../../components/Newsletter/Newsletter";
import { LanguageContext } from "../../context/LanguageContextProvider";

export default function Aboutpage({ setCurrPage }) {
  const { renderContent } = useContext(LanguageContext);
  useEffect(() => {
    setCurrPage("about");
  }, [setCurrPage]);
  return (
    <div className="about-page">
      <h3 className="sub-title">
        {renderContent("About Us", "Sobre nosotros", "Sobre nós")}
      </h3>
      <div className="section1">
        <div className="img-container">
          <img src={aboutImg} alt="" />
        </div>
        <div className="section1-content">
          <h2>
            {renderContent(
              "Your Guide to Authentic Egyptian Travel",
              "Tu guía para un auténtico viaje egipcio",
              "Seu guia para uma autêntica viagem egípcia"
            )}
          </h2>
          <p>
            {renderContent(
              "KMT Tours is an Egyptian tours company that offers a wide range of travel services to explore the beauty and history of Egypt. Our mission is to provide our clients with unforgettable experiences and a hassle-free trip to Egypt, by offering high-quality travel services, customized itineraries, and exceptional customer service.",
              "KMT Tours es una empresa de tours egipcia que ofrece una amplia gama de servicios de viaje para explorar la belleza y la historia de Egipto. Nuestra misión es proporcionar a nuestros clientes experiencias inolvidables y un viaje sin problemas a Egipto, ofreciendo servicios de viaje de alta calidad, itinerarios personalizados y un servicio al cliente excepcional.",
              "KMT Tours é uma empresa de turismo egípcia que oferece uma ampla gama de serviços de viagem para explorar a beleza e a história do Egito. Nossa missão é proporcionar aos nossos clientes experiências inesquecíveis e uma viagem sem problemas ao Egito, oferecendo serviços de viagem de alta qualidade, itinerários personalizados e um serviço ao cliente excepcional."
            )}
          </p>
          <p>
            {renderContent(
              "In addition to our travel services, we also offer a range of travel resources to help you plan your trip to Egypt. These include destination guides, travel tips, and recommendations for things to do and see in Egypt.",
              "Además de nuestros servicios de viaje, también ofrecemos una gama de recursos de viaje para ayudarte a planificar tu viaje a Egipto. Estos incluyen guías de destinos, consejos de viaje y recomendaciones de cosas que hacer y ver en Egipto.",
              "Além dos nossos serviços de viagem, também oferecemos uma gama de recursos de viagem para ajudá-lo a planejar sua viagem ao Egito. Estes incluem guias de destinos, dicas de viagem e recomendações de coisas para fazer e ver no Egito."
            )}
          </p>
        </div>
      </div>
      <div className="section2">
        <div className="row">
          <img src={aboutImg2} alt="" />
          <div className="section2-content right-p">
            <h3>
              {renderContent("Our Vision", "Nuestra Visión", "Nossa Visão")}
            </h3>
            <p>
              {renderContent(
                "At KMT Tours, our vision is to become the premier provider of personalized and authentic travel experiences in Egypt, distinguished by our commitment to excellence, innovation, and social responsibility. We aspire to be the travel company of choice for those seeking to explore Egypt's rich history, diverse culture, and stunning natural landscapes, and to promote cultural exchange and understanding between people from different parts of the world. We strive to exceed our clients' expectations at every step of their journey, and to leave a positive and lasting impact on the communities we visit.",
                "En KMT Tours, nuestra visión es convertirnos en el principal proveedor de experiencias de viaje personalizadas y auténticas en Egipto, distinguidos por nuestro compromiso con la excelencia, la innovación y la responsabilidad social. Aspiramos ser la empresa de viajes de elección para aquellos que buscan explorar la rica historia, la diversa cultura y las deslumbrantes paisajes naturales del Egipto, y promover la intercambio cultural y el entendimiento entre personas de diferentes partes del mundo. Nos esforzamos por superar las expectativas de nuestros clientes en cada etapa de su viaje, y dejar un impacto positivo y duradero en las comunidades que visitamos.",
                "Na KMT Tours, nossa visão é tornar-nos o principal fornecedor de experiências de viagem personalizadas e autênticas no Egito, distinguidos pelo nosso compromisso com a excelência, inovação e responsabilidade social. Aspiramos ser a empresa de viagens de escolha para aqueles que procuram explorar a rica história, a diversa cultura e as deslumbrantes paisagens naturais do Egito, e promover a troca cultural e o entendimento entre pessoas de diferentes partes do mundo. Nos esforçamos para superar as expectativas de nossos clientes em cada etapa de sua jornada, e deixar um impacto positivo e duradouro nas comunidades que visitamos."
              )}
            </p>
          </div>
        </div>
        <div className="row reverse">
          <div className="section2-content left-p">
            <h3>
              {renderContent("Our Mission", "Nuestra Misión", "Nossa Missão")}
            </h3>
            <p>
              {renderContent(
                "At KMT Tours, we are dedicated to creating unforgettable travel experiences that allow our guests to discover the beauty, richness, and diversity of Egypt's history, culture, and landscapes. We believe that travel has the power to broaden horizons, foster cultural exchange and understanding, and inspire personal growth and transformation.",
                "En KMT Tours, estamos dedicados a crear experiencias de viaje inolvidables que permitan a nuestros huéspedes descubrir la belleza, la riqueza y la diversidad de la historia, la cultura y los paisajes de Egipto. Creemos que el viaje tiene el poder de ampliar horizontes, fomentar el intercambio cultural y el entendimiento, e inspirar el crecimiento personal y la transformación.",
                "Na KMT Tours, estamos dedicados a criar experiências de viagem inesquecíveis que permitam aos nossos hóspedes descobrir a beleza, a riqueza e a diversidade da história, cultura e paisagens do Egito. Acreditamos que a viagem tem o poder de alargar horizontes, fomentar a troca cultural e o entendimento, e inspirar o crescimento pessoal e a transformação."
              )}
            </p>
            <p>
              {renderContent("To achieve our mission, we are committed to providing exceptional customer service and personalized attention to each of our clients, from the moment they first contact us until they return home. We understand that every traveler is unique, with their own interests, needs, and preferences, and we strive to tailor our tours to meet those individual needs.",
              "Para lograr nuestra misión, estamos comprometidos a proporcionar un servicio al cliente excepcional y una atención personalizada a cada uno de nuestros clientes, desde el momento en que nos contactan por primera vez hasta que regresan a casa. Entendemos que cada viajero es único, con sus propios intereses, necesidades y preferencias, y nos esforzamos por adaptar nuestros tours para satisfacer esas necesidades individuales.",
              "Para alcançar nossa missão, estamos comprometidos em fornecer um serviço ao cliente excepcional e atenção personalizada a cada um de nossos clientes, desde o momento em que nos contatam pela primeira vez até que retornem para casa. Entendemos que cada viajante é único, com seus próprios interesses, necessidades e preferências, e nos esforçamos para adaptar nossos tours para atender a essas necessidades individuais.")}
            </p>
          </div>
          <img src={aboutImg3} alt="" />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
