import { useCallback, useContext, useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";
import axios from "axios";
import { AlertContext } from "../../context/AlertContextProvider";
import Pagination from "@mui/material/Pagination";

const resultsPerPage = 4;

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const { showAlert } = useContext(AlertContext);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 400);
  };

  const getReviews = useCallback(async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/review`
      );
      setReviews(res.data);
    } catch (e) {
      return showAlert("error", "Something went wrong, please try again later");
    }
  }, [showAlert]);

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="max-w-screen-md px-10 flex flex-col gap-10 mx-auto w-full">
        {reviews
          .slice((page - 1) * resultsPerPage, page * resultsPerPage)
          .map((review, index) => (
            <ReviewItem key={index} review={review} />
          ))}
      </div>
      {reviews.length > resultsPerPage && (
        <Pagination
          count={Math.ceil(reviews.length / resultsPerPage)}
          page={page}
          onChange={handleChange}
          size="large"
        />
      )}
    </div>
  );
};
export default ReviewsList;
