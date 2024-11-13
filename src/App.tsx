import './App.css';

import { useState } from 'react';

import { IMovie } from './types';
import Background from './Components/Background';
import MovieList from './Components/MovieList';
import Movies from './Data/Movies';

import gps from "./Assets/gps.png";
import MovieDetails from './Components/MovieDetails';

function App() {

  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>();

  const content = (
    selectedMovie == null
      ? (
        <div>
          <p className="mb-1 flex flex-col items-center justify-center text-5xl text-gray-700 cursor-default font-teaChestRegular">The World of James Bond</p>
          <br></br>
          <MovieList movies={Movies} onSelect={m => setSelectedMovie(m)}/>
        </div>
      ) : (
        <div onClick={() => setSelectedMovie(null)}>
          <MovieDetails movie={selectedMovie} />
        </div>
      )

  )

  return (
      <Background content={content} imageUrl={gps}/>
  );
}

export default App;
