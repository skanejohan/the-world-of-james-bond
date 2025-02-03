import { IMovie } from "../types";
import MovieTile from "./MovieTile";

interface Props {
    movies: IMovie[];
    onSelect: (movie: IMovie) => void;
}

const MovieGrid = ({movies, onSelect}: Props) => {
  const _def = "    grid-cols-1     gap-6      px-4";
  const __sm = " sm:grid-cols-1  sm:gap-6   sm:px-4";
  const __md = " md:grid-cols-2  md:gap-6   md:px-8";
  const __lg = " lg:grid-cols-2  lg:gap-8   lg:px-16";
  const __xl = " xl:grid-cols-3  xl:gap-10  xl:px-16";
  const _2xl = "2xl:grid-cols-3 2xl:gap-12 2xl:px-16";
  const cls = `container m-auto py-12 grid ${_def} ${__sm} ${__md} ${__lg} ${__xl} ${_2xl}`;
  return (
    <>
        <div className={cls}>
            {movies.map(m => <MovieTile key={m.id} movie={m} onSelect={onSelect}/>)}
        </div>
    </>
  )
}

export default MovieGrid;