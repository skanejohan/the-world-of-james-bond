import { IMovie } from "../types";

interface Props {
    movie: IMovie;
    onSelect: (movie: IMovie) => void;
}

const MovieTile = ({ movie, onSelect }: Props) => {

    const divClass = movie.enabled ? "" : "grayscale";

    const buttonBaseClass = "rounded-md border-4";
    const buttonClass = movie.enabled 
        ? `${buttonBaseClass} border-sky-500 cursor-pointer transition duration-300 hover:scale-105` 
        : `${buttonBaseClass} border-sky-800 cursor-default`;

    return (
        <div className={divClass}>
            <button className={buttonClass} onClick={() => onSelect(movie)}>
                <img src={movie.poster} className="rounded-sm" />
            </button>
        </div>
    )
}

export default MovieTile;