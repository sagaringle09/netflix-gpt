import { useState } from "react";
import { IMG_API_URL } from "../utils/constants";
import CardsDetails from "./CardsDetails";
import { addSelectedMovie } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";

const Cards = ({ movie }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    dispatch(addSelectedMovie(movie));
    setShowPopup(true);
  };

  return (
    <>
      <div className="w-48 pr-4 ">
        <img
          onClick={handleClick}
          className="rounded-lg "
          src={IMG_API_URL + movie.poster_path}
          alt="poster"
        />
        {showPopup && <CardsDetails onClose={() => setShowPopup(false)} />}
      </div>
    </>
  );
};

export default Cards;
