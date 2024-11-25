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

  return (
    selectedMovie == null
    ? (
        <Background content={<MovieList movies={Movies} onSelect={setSelectedMovie}/>} imageUrl={gps}/>
    ) : (
      <div onClick={() => setSelectedMovie(null)}>
        <MovieDetails movie={selectedMovie} key={selectedMovie.id} />
      </div>
    )
  );
}

export default App;
