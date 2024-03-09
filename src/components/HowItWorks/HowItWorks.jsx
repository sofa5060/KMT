import { useContext } from "react";
import image1 from "../../images/howitworks1.png";
import image2 from "../../images/howitworks2.png";
import image3 from "../../images/howitworks3.png";
import image4 from "../../images/howitworks4.png";
import { cn } from "../../lib/utils";
import { LanguageContext } from "../../context/LanguageContextProvider";

export const HowItWorks = () => {
  const { renderContent } = useContext(LanguageContext);

  const STEPS = [
    {
      title: renderContent(
        "Initiate Your Custom Journey",
        "Iniciar su viaje personalizado",
        "Iniciar sua jornada personalizada"
      ),
      descriptionTitle1: renderContent(
        "Customization Form:",
        "Formulario de personalización:",
        "Formulário de personalização:"
      ),
      description1: renderContent(
        " Begin by filling out our detailed customization form on our website. This form is designed to capture your interests, preferences, travel dates, budget, and any special requests you might have.",
        " Comience completando nuestro detallado formulario de personalización en nuestro sitio web. Este formulario está diseñado para capturar sus intereses, preferencias, fechas de viaje, presupuesto y cualquier solicitud especial que pueda tener.",
        " Comece preenchendo nosso detalhado formulário de personalização em nosso site. Este formulário é projetado para capturar seus interesses, preferências, datas de viagem, orçamento e quaisquer solicitações especiais que você possa ter."
      ),
      descriptionTitle2: renderContent(
        "Consultation with Travel Experts:",
        "Consulta con expertos en viajes:",
        "Consulta com especialistas em viagens:"
      ),
      description2: renderContent(
        " Prefer a more personal touch? Schedule a consultation with one of our travel experts. During this session, we'll discuss your travel goals, preferences, and any specific needs or desires you have for your trip.",
        " ¿Prefiere un toque más personal? Programe una consulta con uno de nuestros expertos en viajes. Durante esta sesión, discutiremos sus objetivos de viaje, preferencias y cualquier necesidad o deseo específico que tenga para su viaje.",
        " Prefere um toque mais pessoal? Agende uma consulta com um de nossos especialistas em viagens. Durante esta sessão, discutiremos seus objetivos de viagem, preferências e quaisquer necessidades ou desejos específicos que você tenha para sua viagem."
      ),
      image: image1,
      leftClassName: "mr-auto",
      rightClassName: "ml-auto text-right max-md:text-left",
    },
    {
      title: renderContent(
        "Design Your Personalized Itinerary",
        "Diseñe su itinerario personalizado",
        "Projete seu itinerário personalizado"
      ),
      descriptionTitle1: renderContent(
        "Personalized Tour Plan:",
        "Plan de viaje personalizado:",
        "Plano de viagem personalizado:"
      ),
      description1: renderContent(
        " Based on the information you've shared, our team of expert travel planners will craft a preliminary tour plan tailored just for you.",
        " Basándonos en la información que ha compartido, nuestro equipo de expertos planificadores de viajes elaborará un plan de viaje preliminar adaptado solo para usted.",
        " Com base nas informações que você compartilhou, nossa equipe de planejadores de viagens especializados elaborará um plano de viagem preliminar adaptado apenas para você."
      ),
      descriptionTitle2: renderContent(
        "Interactive Tools:",
        "Herramientas interactivas:",
        "Ferramentas interativas:"
      ),
      description2: renderContent(
        " We provide interactive tools on our website, allowing you to explore potential itinerary adjustments in real-time. Discover alternative activities, adjust your travel dates, or modify your accommodation preferences at the click of a button.",
        " Proporcionamos herramientas interactivas en nuestro sitio web que le permiten explorar posibles ajustes de itinerario en tiempo real. Descubra actividades alternativas, ajuste sus fechas de viaje o modifique sus preferencias de alojamiento con solo hacer clic en un botón.",
        " Fornecemos ferramentas interativas em nosso site, permitindo que você explore ajustes de itinerário em potencial em tempo real. Descubra atividades alternativas, ajuste suas datas de viagem ou modifique suas preferências de acomodação com apenas um clique."
      ),
      image: image2,
      leftClassName: "ml-auto",
      rightClassName: "mr-auto",
    },
    {
      title: renderContent(
        "Finalize Your Tailored Experience",
        "Finaliza tu experiencia personalizada",
        "Finalize sua experiência personalizada"
      ),
      descriptionTitle1: renderContent(
        "Iterative Review Process:",
        "Proceso de revisión iterativo:",
        "Processo de revisão iterativo:"
      ),
      description1: renderContent(
        " Once you receive your preliminary itinerary, we enter the iterative review process. Here, you can provide feedback, request changes, or add new destinations and activities",
        " Una vez que reciba su itinerario preliminar, ingresamos al proceso de revisión iterativo. Aquí, puede proporcionar comentarios, solicitar cambios o agregar nuevos destinos y actividades",
        " Depois de receber seu itinerário preliminar, entramos no processo de revisão iterativo. Aqui, você pode fornecer feedback, solicitar alterações ou adicionar novos destinos e atividades"
      ),
      descriptionTitle2: renderContent(
        "Final Approval:",
        "Aprobación final:",
        "Aprovação final:"
      ),
      description2: renderContent(
        " With your input, we'll refine your itinerary to perfection. You'll receive a detailed final itinerary that includes all bookings, reservations, and a comprehensive travel guide tailored to your trip.",
        " Con su aporte, perfeccionaremos su itinerario. Recibirá un itinerario final detallado que incluye todas las reservas, reservas y una guía de viaje completa adaptada a su viaje.",
        " Com sua contribuição, refinaremos seu itinerário à perfeição. Você receberá um itinerário final detalhado que inclui todas as reservas, reservas e um guia de viagem abrangente adaptado à sua viagem."
      ),
      image: image3,
      leftClassName: "mr-auto",
      rightClassName: "ml-auto text-right max-md:text-left",
    },
    {
      title: renderContent(
        "Start Your Egyptian Adventure",
        "Comienza tu aventura egipcia",
        "Comece sua aventura egípcia"
      ),
      descriptionTitle1: renderContent(
        "Begin Your Adventure:",
        "Comience su aventura:",
        "Comece sua aventura:"
      ),
      description1: renderContent(
        " With your tailored itinerary in hand, you're ready to experience Egypt like never before. From the moment you land, our team ensures your trip runs smoothly. We offer support throughout your journey, from providing local guides to 24/7 customer service for any inquiries or assistance you might need.",
        " Con su itinerario personalizado en mano, está listo para experimentar Egipto como nunca antes. Desde el momento en que aterriza, nuestro equipo garantiza que su viaje se desarrolle sin problemas. Ofrecemos soporte durante todo su viaje, desde la provisión de guías locales hasta servicio al cliente las 24 horas del día, los 7 días de la semana para cualquier consulta o asistencia que pueda necesitar.",
        " Com seu itinerário personalizado em mãos, você está pronto para experimentar o Egito como nunca antes. Desde o momento em que você pousa, nossa equipe garante que sua viagem seja tranquila. Oferecemos suporte durante toda a sua jornada, desde a prestação de guias locais até o serviço de atendimento ao cliente 24 horas por dia, 7 dias por semana, para quaisquer dúvidas ou assistência que você possa precisar."
      ),
      descriptionTitle2: renderContent(
        "Beyond the Journey:",
        "Más allá del viaje:",
        "Além da jornada:"
      ),
      description2: renderContent(
        " Our commitment to you doesn't end when your trip does. After your return, we'll reach out for feedback to learn about your experiences. Your insights help us refine our services and assist future travelers in creating their perfect Egyptian adventures.",
        " Nuestro compromiso con usted no termina cuando termina su viaje. Después de su regreso, nos pondremos en contacto para obtener comentarios sobre sus experiencias. Sus ideas nos ayudan a perfeccionar nuestros servicios y ayudar a futuros viajeros a crear sus aventuras egipcias perfectas.",
        " Nosso compromisso com você não termina quando sua viagem termina. Após o seu retorno, entraremos em contato para obter feedback sobre suas experiências. Suas ideias nos ajudam a aprimorar nossos serviços e ajudar futuros viajantes a criar suas aventuras egípcias perfeitas."
      ),
      image: image4,
      leftClassName: "ml-auto",
      rightClassName: "mr-auto",
    },
  ];

  return (
    <div className="mt-24">
      <h3 className="text-4xl font-bold text-center">How it works</h3>
      <div className="bg-[#171508] rounded-3xl mx-8 mt-8 py-24 max-md:py-12">
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white max-md:hidden"></div>
          <div className="space-y-40 max-md:space-y-20">
            {STEPS.map((step, index) => (
              <div
                className={cn(
                  "flex justify-center px-20 gap-24 mx-auto items-center max-md:flex-col max-md:gap-8 text-white max-md:text-start max-md:items-start max-md:px-8",
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                )}
                key={index}
              >
                <h4 className="bg-primary text-2xl font-bold rounded-full hidden w-[64px] h-[64px] text-center pt-4 max-md:inline-block">
                  {index + 1}
                </h4>
                <div className="flex-1 max-h-max">
                  <img
                    src={step.image}
                    alt="how it works"
                    className={cn("max-w-[480px] w-full", step.leftClassName)}
                  />
                </div>
                <div className="flex-1 max-h-max">
                  <div
                    className={cn(
                      "text-white max-w-[550px]",
                      step.rightClassName
                    )}
                  >
                    <h4 className="bg-primary text-2xl font-bold rounded-full inline-block w-[64px] h-[64px] text-center pt-4 max-md:hidden">
                      {index + 1}
                    </h4>
                    <h3 className="text-2xl font-bold mt-12 max-md:mt-0">
                      {step.title}
                    </h3>
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
