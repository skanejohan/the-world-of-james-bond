import IMovie from "../types";

interface Props {
    movie: IMovie;
    onSelect: (movie: IMovie) => void;
}

const Movie = ({movie, onSelect}: Props) => {
  
  const divClass = movie.enabled 
    ? "mb-1 flex flex-col items-center justify-center h-6 has-tooltip"
    : "mb-1 flex flex-col items-center justify-center h-6";

  const buttonClass = movie.enabled 
    ? "ml-2 mr-2 text-xl text-center text-gray-700 font-teaChestRegular hover:text-2xl" 
    : "ml-2 mr-2 text-xl text-center text-gray-500 font-teaChestRegular cursor-default";

  return (
    <div className={divClass}>
      <span className='tooltip rounded shadow-lg pl-8 pr-8 pb-2 pt-2 bg-gray-400 text-gray-600 -mt-16 ml-180'>{movie.description}</span>
      <button className={buttonClass} onClick={() => onSelect(movie)}>
            {movie.title} ({movie.year})
        </button>
    </div>
  )
}

export default Movie