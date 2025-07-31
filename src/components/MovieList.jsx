import Cards from "./Cards";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <>
      <div className="px-4">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll ">
          <div className="flex">
            {movies.map((movie) => (
              <Cards key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
