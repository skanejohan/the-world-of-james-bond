import { IMovie } from "../types";

interface Props {
    movie: IMovie;
}

const MovieDetails = ({movie}: Props) => {
  
  return (
<div className="flex flex-col h-screen">
      <header className="py-5 bg-gray-500 text-5xl text-white text-center font-teaChestRegular">
      {movie.title}
      </header>
      <main className="flex-1 overflow-y-auto p-5">
        {movie.scenes.map(s => (
           <div key={s.title}>
               <h2>{s.title}</h2>
               <p>{s.description}</p>
           </div>
       ))}
      </main>
      <footer className="py-5 bg-gray-500 text-5xl text-center text-white font-teaChestRegular">
      {movie.year}
      </footer>
    </div>
  )
}

export default MovieDetails