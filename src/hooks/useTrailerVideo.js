import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../redux/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useTrailerVideo = () =>{
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const movieId = movies[0];
  const { id } = movieId;

useEffect(() => {
    const getTrailerVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterVideo = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    };
    getTrailerVideo();
  }, [id, dispatch]);
  
}
export default useTrailerVideo;