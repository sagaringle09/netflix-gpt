import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () =>{
const dispatch = useDispatch();
  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      dispatch(addPopularMovies(json.results));
      console.log(json.results)
      
    };
    getPopularMovies();
  }, [dispatch]);
}
export default usePopularMovies;