import { IMovie } from "../types";
import Movie from "./Movie";

interface Props {
    movies: IMovie[];
    onSelect: (movie: IMovie) => void;
}

const MovieList = ({movies, onSelect}: Props) => {
  return (
    <>
      {movies.map(m => <Movie key={m.id} movie={m} onSelect={onSelect}/>)}
    </>
  )
}

export default MovieList;