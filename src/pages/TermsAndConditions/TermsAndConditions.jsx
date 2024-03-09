import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContextProvider";

const TermsAndConditions = ({ setCurrPage }) => {
  const { renderContent } = useContext(LanguageContext);

  useEffect(() => {
    setCurrPage("terms");
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {renderContent(
                "Terms and Conditions for KMT Tours Egypt",
                "Términos y Condiciones de KMT Tours Egipto",
                "Termos e Condições para KMT Tours Egito"
              )}
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "1. Use of Services",
                  "1. Uso de Servicios",
                  "1. Uso de Serviços"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Eligibility: You must be at least 18 years old to book a trip with KMT Tours Egypt.",
                  "Elegibilidad: Debes tener al menos 18 años para reservar un viaje con KMT Tours Egipto.",
                  "Elegibilidade: Você deve ter pelo menos 18 anos para reservar uma viagem com a KMT Tours Egito."
                )}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Service Description: KMT Tours Egypt provides planned and customized travel services to Egypt. Details of these services are available on our website.",
                  "Descripción del Servicio: KMT Tours Egipto ofrece servicios de viaje planificados y personalizados a Egipto. Los detalles de estos servicios están disponibles en nuestro sitio web.",
                  "Descrição do Serviço: A KMT Tours Egito oferece serviços de viagem planejados e personalizados para o Egito. Detalhes desses serviços estão disponíveis em nosso site."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "2. User Responsibilities",
                  "2. Responsabilidades del Usuario",
                  "2. Responsabilidades do Usuário"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Accuracy of Information: You agree to provide accurate and up-to-date information for all bookings.",
                  "Exactitud de la Información: Usted acepta proporcionar información precisa y actualizada para todas las reservas.",
                  "Precisão das Informações: Você concorda em fornecer informações precisas e atualizadas para todas as reservas."
                )}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Compliance with Local Laws: You are responsible for complying with all local laws and regulations while traveling in Egypt.",
                  "Cumplimiento de las Leyes Locales: Usted es responsable de cumplir con todas las leyes y regulaciones locales mientras viaja en Egipto.",
                  "Cumprimento das Leis Locais: Você é responsável por cumprir todas as leis e regulamentos locais enquanto viaja no Egito."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "3. Intellectual Property Rights",
                  "3. Derechos de Propiedad Intelectual",
                  "3. Direitos de Propriedade Intelectual"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Ownership: All content on the KMT Tours Egypt website, including text, graphics, logos, and images, is the exclusive property of KMT Tours Egypt or its content suppliers and protected by international copyright laws.",
                  "Propiedad: Todo el contenido en el sitio web de KMT Tours Egipto, incluido texto, gráficos, logotipos e imágenes, es propiedad exclusiva de KMT Tours Egipto o sus proveedores de contenido y está protegido por las leyes internacionales de derechos de autor.",
                  "Propriedade: Todo o conteúdo no site da KMT Tours Egito, incluindo texto, gráficos, logotipos e imagens, é propriedade exclusiva da KMT Tours Egito ou de seus fornecedores de conteúdo e é protegido pelas leis internacionais de direitos autorais."
                )}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Use Restriction: Content from the KMT Tours Egypt website may not be copied, reproduced, or sold without our prior written consent.",
                  "Restricción de Uso: El contenido del sitio web de KMT Tours Egipto no puede ser copiado, reproducido o vendido sin nuestro consentimiento previo por escrito.",
                  "Restrição de Uso: O conteúdo do site da KMT Tours Egito não pode ser copiado, reproduzido ou vendido sem nosso consentimento prévio por escrito."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "4. Booking and Cancellation Policy",
                  "4. Política de Reservas y Cancelación",
                  "4. Política de Reserva e Cancelamento"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Bookings: Bookings can be made online through our website or by contacting our customer service.",
                  "Reservas: Las reservas se pueden hacer en línea a través de nuestro sitio web o contactando a nuestro servicio de atención al cliente.",
                  "Reservas: As reservas podem ser feitas online através de nosso site ou entrando em contato com nosso serviço de atendimento ao cliente."
                )}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Cancellation: Cancellations must be made within specific time frame prior to the trip start date for a full refund. Cancellations made after this period may incur fees.",
                  "Cancelación: Las cancelaciones deben realizarse dentro de plazo específico antes de la fecha de inicio del viaje para obtener un reembolso completo. Las cancelaciones realizadas después de este período pueden incurrir en tarifas.",
                  "Cancelamento: As cancelamentos devem ser feitos dentro de período específico antes da data de início da viagem para obter um reembolso total. Cancelamentos feitos após esse período podem incorrer em taxas."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "5. Limitations of Liability",
                  "5. Limitaciones de Responsabilidad",
                  "5. Limitações de Responsabilidade"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Service Interruptions: KMT Tours Egypt is not liable for any interruptions to our services due to unforeseen circumstances or events beyond our control.",
                  "Interrupciones del Servicio: KMT Tours Egipto no se hace responsable de las interrupciones en nuestros servicios debido a circunstancias imprevistas o eventos fuera de nuestro control.",
                  "Interrupções do Serviço: A KMT Tours Egito não é responsável por quaisquer interrupções em nossos serviços devido a circunstâncias imprevistas ou eventos além de nosso controle."
                )}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Travel Risks: While KMT Tours Egypt endeavors to provide a safe travel experience, we are not liable for any personal harm or property damage occurring during our tours.",
                  "Riesgos de Viaje: Si bien KMT Tours Egipto se esfuerza por proporcionar una experiencia de viaje segura, no somos responsables de ningún daño personal o daño a la propiedad que ocurra durante nuestros tours.",
                  "Riscos de Viagem: Embora a KMT Tours Egito se esforce para fornecer uma experiência de viagem segura, não somos responsáveis por qualquer dano pessoal ou dano à propriedade ocorrido durante nossos passeios."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "6. Dispute Resolution",
                  "6. Resolución de Disputas",
                  "6. Resolução de Disputas"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Governing Law: These terms and conditions are governed by the laws of Egypt.",
                  "Ley Vigente: Estos términos y condiciones están regidos por las leyes de Egipto.",
                  "Lei Aplicável: Estes termos e condições são regidos pelas leis de Egito."
                )}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "Dispute Process: Any disputes arising from these terms will be resolved through final and binding arbitration in Egypt.",
                  "Proceso de Disputa: Cualquier disputa que surja de estos términos se resolverá a través de arbitraje final y vinculante en Egipto.",
                  "Processo de Disputa: Quaisquer disputas decorrentes destes termos serão resolvidas por meio de arbitragem final e vinculativa em Egito."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "7. Changes to Terms and Conditions",
                  "7. Cambios en los Términos y Condiciones",
                  "7. Alterações nos Termos e Condições"
                )}
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                {renderContent(
                  "We reserve the right to update these terms and conditions at any time. Continued use of our services after such changes constitutes your consent to the new terms.",
                  "Nos reservamos el derecho de actualizar estos términos y condiciones en cualquier momento. El uso continuado de nuestros servicios después de tales cambios constituye su consentimiento a los nuevos términos.",
                  "Reservamo-nos o direito de atualizar estes termos e condições a qualquer momento. O uso contínuo de nossos serviços após tais alterações constitui seu consentimento aos novos termos."
                )}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                {renderContent(
                  "This Terms and Conditions document applies to all users of KMT Tours Egypt's services and website visitors.",
                  "Este documento de Términos y Condiciones se aplica a todos los usuarios de los servicios de KMT Tours Egipto y a los visitantes del sitio web.",
                  "Este documento de Termos e Condições se aplica a todos os usuários dos serviços da KMT Tours Egito e aos visitantes do site."
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

export default TermsAndConditions;
