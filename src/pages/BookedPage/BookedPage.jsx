import { useParams } from "react-router-dom/cjs/react-router-dom";
import Messagepage from "../../components/MessagePage/Messagepage";

const BookedPage = () => {
  const { orderID } = useParams();

  return (
    <div className="mt-20">
      <Messagepage type="paymentSuccess" orderID={orderID} />
    </div>
  );
};
export default BookedPage;
