import { useSelector } from "react-redux";
import { IMG_API_URL } from "../utils/constants";

const CardsDetails = ({ onClose }) => {
  const movie = useSelector((store) => store.movies);
  const { original_title, poster_path, release_date, overview } =
    movie.selectedMovie;

  if (!movie) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-250 shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-red-500 font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Movie Details</h2>
        <div className="flex">
          <img
            className="w-100 h-100"
            src={IMG_API_URL + poster_path}
            alt="poster"
          />

          <div className="p-10 ">
            <h1 className="font-bold text-3xl">{original_title}</h1>
            <h2>{release_date}</h2>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
