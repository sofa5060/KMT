import { useParams } from "react-router-dom/cjs/react-router-dom";
import Messagepage from "../../components/MessagePage/Messagepage";
import { useEffect } from "react";

const BookedPage = () => {
  const { orderID } = useParams();

  useEffect(() => {
    window.gtag("event", "conversion_event_purchase_1", {
      // <event_parameters>
    });
  }, []);

  return (
    <div className="mt-20">
      <Messagepage type="paymentSuccess" orderID={orderID} />
      {/* <script>
        {`
          gtag('event', 'conversion_event_purchase', {
            // <event_parameters>
          });
        `}
      </script> */}
    </div>
  );
};
export default BookedPage;
