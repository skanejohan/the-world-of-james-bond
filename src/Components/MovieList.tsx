import Movie from "./Movie";

interface Props {
    movies: {id: number, title: string, year: number, enabled: boolean}[];
}

const MovieList = ({movies}: Props) => {
  return (
    <div >
      {movies.map(m => <Movie movie={m} />)}
    </div>
  )
}

export default MovieList;