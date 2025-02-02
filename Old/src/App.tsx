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
        <Background 
          imageUrl={gps} 
          header="The World of James Bond" 
          footer="From mountains to beaches. From ski slopes to the moon." 
          content={<MovieList movies={Movies} onSelect={setSelectedMovie}/>} />
    ) : (
      <Background 
        imageUrl={gps} 
        header={selectedMovie.title} 
        footer={selectedMovie.year.toString()}
        content={<div onClick={() => setSelectedMovie(null)}><MovieDetails movie={selectedMovie} key={selectedMovie.id} /></div>} />
    )
  );
}

export default App;
