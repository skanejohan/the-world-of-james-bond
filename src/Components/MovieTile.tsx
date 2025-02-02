import { IMovie } from "../types";

interface Props {
    movie: IMovie;
    onSelect: (movie: IMovie) => void;
}

const MovieTile = ({ movie, onSelect }: Props) => {

    const divClass = movie.enabled ? "" : "grayscale";

    const buttonClass = movie.enabled ? "cursor-pointer" : "cursor-default";

    return (
        <div className={divClass}>
            <button className={buttonClass} onClick={() => onSelect(movie)}>
                <img src={movie.poster} />
            </button>
        </div>
    )
}

export default MovieTile;