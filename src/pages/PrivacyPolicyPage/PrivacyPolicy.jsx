import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContextProvider";

const PrivacyPolicy = ({ setCurrPage }) => {
  const { renderContent } = useContext(LanguageContext);

  useEffect(() => {
    setCurrPage("privacy");
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {renderContent(
                "Privacy Policy for KMT Tours Egypt",
                "Política de privacidad de KMT Tours Egipto",
                "Política de Privacidade para KMT Tours Egito"
              )}
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "Data Collection",
                  "Recopilación de datos",
                  "Coleta de Dados"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "We collect the following personal data from our users:",
                  "Recopilamos los siguientes datos personales de nuestros usuarios:",
                  "Coletamos os seguintes dados pessoais de nossos usuários:"
                )}
              </p>
              <ul className="list-disc pl-5">
                <li>
                  {renderContent(
                    "Names: To personalize your booking and travel documents.",
                    "Nombres: Para personalizar su reserva y documentos de viaje.",
                    "Nomes: Para personalizar sua reserva e documentos de viagem."
                  )}
                </li>
                <li>
                  {renderContent(
                    "Email Addresses: To communicate with you about your trip, including booking confirmation, updates, and marketing purposes if you opt-in.",
                    "Direcciones de correo electrónico: Para comunicarnos con usted sobre su viaje, incluida la confirmación de la reserva, actualizaciones y fines de marketing si opta por ello.",
                    "Endereços de e-mail: Para nos comunicarmos com você sobre sua viagem, incluindo confirmação de reserva, atualizações e fins de marketing, se optar por isso."
                  )}
                </li>
                <li>
                  {renderContent(
                    "IP Addresses: For website analytics, to improve our service offering and website performance.",
                    "Direcciones IP: Para análisis del sitio web, mejorar nuestra oferta de servicios y el rendimiento del sitio web.",
                    "Endereços IP: Para análise do site, melhorar nossa oferta de serviços e desempenho do site."
                  )}
                </li>
              </ul>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "Purpose of Data Processing",
                  "Propósito del procesamiento de datos",
                  "Propósito do Processamento de Dados"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "We process your data for the following purposes:",
                  "Procesamos sus datos para los siguientes fines:",
                  "Processamos seus dados para os seguintes fins:"
                )}
              </p>
              <ul className="list-disc pl-5">
                <li>
                  {renderContent(
                    "Service Provision: To manage your bookings and provide the travel services you request.",
                    "Provisión de servicios: Para gestionar sus reservas y proporcionar los servicios de viaje que solicite.",
                    "Provisão de Serviços: Para gerenciar suas reservas e fornecer os serviços de viagem que você solicitar."
                  )}
                </li>
                <li>
                  {renderContent(
                    "AB Testing & Analytics: To understand how users interact with our website, making improvements to enhance user experience.",
                    "Pruebas AB y Análisis: Para comprender cómo interactúan los usuarios con nuestro sitio web, realizando mejoras para mejorar la experiencia del usuario.",
                    "Testes AB e Análises: Para entender como os usuários interagem com nosso site, fazendo melhorias para melhorar a experiência do usuário."
                  )}
                </li>
                <li>
                  {renderContent(
                    "Marketing Communications: With your consent, to inform you about special offers, new services, or travel tips that might interest you.",
                    "Comunicaciones de marketing: Con su consentimiento, para informarle sobre ofertas especiales, nuevos servicios o consejos de viaje que puedan interesarle.",
                    "Comunicações de Marketing: Com seu consentimento, para informá-lo sobre ofertas especiais, novos serviços ou dicas de viagem que possam interessar você."
                  )}
                </li>
              </ul>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent("Consent", "Consentimiento", "Consentimento")}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  'Consent for data collection and processing is obtained through an "Accept Cookies" pop-up on our website. You have the right to withdraw your consent at any time.',
                  'El consentimiento para la recopilación y el tratamiento de datos se obtiene a través de un pop-up de "Aceptar cookies" en nuestro sitio web. Tiene derecho a retirar su consentimiento en cualquier momento.',
                  'O consentimento para a coleta e o processamento de dados é obtido por meio de um pop-up "Aceitar cookies" em nosso site. Você tem o direito de retirar seu consentimento a qualquer momento.'
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "Data Sharing",
                  "Compartir datos",
                  "Compartilhamento de Dados"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "We do not share your personal data with third parties. All information collected is solely used for the purposes stated in this Privacy Policy.",
                  "No compartimos sus datos personales con terceros. Toda la información recopilada se utiliza únicamente para los fines establecidos en esta Política de Privacidad.",
                  "Não compartilhamos seus dados pessoais com terceiros. Todas as informações coletadas são usadas exclusivamente para os fins estabelecidos nesta Política de Privacidade."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "Data Security",
                  "Seguridad de datos",
                  "Segurança de Dados"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "We implement a higher level of protection to secure your personal data against unauthorized access, alteration, disclosure, or destruction.",
                  "Implementamos un nivel superior de protección para asegurar sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción.",
                  "Implementamos um nível mais alto de proteção para garantir a segurança de seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "Policy Updates",
                  "Actualizaciones de la política",
                  "Atualizações da Política"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Users will be informed of any updates to our Privacy Policy via email. We encourage you to review our policy periodically.",
                  "Los usuarios serán informados de cualquier actualización de nuestra Política de Privacidad por correo electrónico. Le recomendamos que revise nuestra política periódicamente.",
                  "Os usuários serão informados sobre quaisquer atualizações de nossa Política de Privacidade por e-mail. Recomendamos que você revise nossa política periodicamente."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "User Rights",
                  "Derechos del usuario",
                  "Direitos do Usuário"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Under GDPR, you have the right to access, rectify, or erase your personal data, among other rights. To exercise these rights, please contact us using the details provided below.",
                  "Según el RGPD, tiene derecho a acceder, rectificar o eliminar sus datos personales, entre otros derechos. Para ejercer estos derechos, contáctenos utilizando los detalles proporcionados a continuación.",
                  "De acordo com o GDPR, você tem o direito de acessar, retificar ou apagar seus dados pessoais, entre outros direitos. Para exercer esses direitos, entre em contato conosco usando os detalhes fornecidos abaixo."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "Accessibility",
                  "Accesibilidad",
                  "Acessibilidade"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Our Privacy Policy is available in three languages, ensuring accessibility to all users interested in traveling to Egypt.",
                  "Nuestra Política de Privacidad está disponible en tres idiomas, asegurando accesibilidad a todos los usuarios interesados en viajar a Egipto.",
                  "Nossa Política de Privacidade está disponível em três idiomas, garantindo acessibilidade a todos os usuários interessados em viajar para o Egito."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "This Privacy Policy applies to all users of KMT Tours Egypt's services and website visitors.",
                  "Esta Política de Privacidad se aplica a todos los usuarios de los servicios de KMT Tours Egipto y a los visitantes del sitio web.",
                  "Esta Política de Privacidade se aplica a todos os usuários dos serviços da KMT Tours Egito e aos visitantes do site."
                )}
              </h4>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <p className="text-xs text-gray-500">
                {renderContent(
                  "Last updated: March 9, 2024",
                  "Última actualización: 9 de marzo de 2024",
                  "Última atualização: 9 de março de 2024"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
