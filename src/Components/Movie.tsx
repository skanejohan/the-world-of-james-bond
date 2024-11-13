interface Props {
    movie: {id: number, title: string, year: number, enabled: boolean};
}

const Movie = ({movie}: Props) => {
  
  const buttonClass = movie.enabled 
    ? "ml-2 mr-2 text-xl text-center text-gray-700 font-teaChestRegular hover:text-2xl" 
    : "ml-2 mr-2 text-xl text-center text-gray-500 font-teaChestRegular cursor-default";

  return (
    <div className="mb-1 flex flex-col items-center justify-center h-6">
        <button className={buttonClass}>
            {movie.title} ({movie.year})
        </button>
    </div>
  )
}

export default Movie