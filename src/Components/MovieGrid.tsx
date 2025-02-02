import { IMovie } from "../types";
import MovieTile from "./MovieTile";

interface Props {
    movies: IMovie[];
    onSelect: (movie: IMovie) => void;
}

const MovieGrid = ({movies, onSelect}: Props) => {
  return (
    <>
        <div className="container m-auto py-12 lg:px-60 grid gap-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {movies.map(m => <MovieTile key={m.id} movie={m} onSelect={onSelect}/>)}
        </div>
    </>
  )
}

export default MovieGrid;