import { IMovie } from "../types";
import Movie from "./Movie";

interface Props {
    movies: IMovie[];
    onSelect: (movie: IMovie) => void;
}

const MovieList = ({movies, onSelect}: Props) => {
  return (
    <div>
      <p className="mb-1 flex flex-col items-center justify-center text-5xl text-gray-700 cursor-default font-teaChestRegular">The World of James Bond</p>
      <br></br>
      <div>
        {movies.map(m => <Movie key={m.id} movie={m} onSelect={onSelect}/>)}
      </div>
    </div>
  )
}

export default MovieList;