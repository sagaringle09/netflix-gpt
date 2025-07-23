import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
const dispatch = useDispatch();

  
  useEffect(() => {
const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

    getNowPlayingMovies();
  }, [dispatch]);
}
export default useNowPlayingMovies;