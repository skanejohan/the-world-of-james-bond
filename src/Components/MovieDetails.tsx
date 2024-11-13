import { IMovie } from "../types";

interface Props {
    movie: IMovie;
}

const MovieDetails = ({movie}: Props) => {
  
  return (
    <div>
        <h1>{movie.title}</h1>
        {movie.scenes.map(s => (
            <div key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
            </div>
        ))}
    </div>
  )

}

export default MovieDetails