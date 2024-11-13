import IMovie from "../types";
import Movie from "./Movie";

interface Props {
    movies: IMovie[];
}

const MovieList = ({movies}: Props) => {
  return (
    <div >
      {movies.map(m => <Movie movie={m} />)}
    </div>
  )
}

export default MovieList;