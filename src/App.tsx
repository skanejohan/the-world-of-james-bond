import { useState } from 'react';
import MovieGrid from './Components/MovieGrid';
import { Movies } from './Data/movies';
import './Styles/styles.css';
import { IMovie } from './types';
import { Fade } from "react-awesome-reveal";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>();

  return (
    selectedMovie == null
      ? <div>
          <Fade duration={1000}>
            <MovieGrid movies={Movies} onSelect={setSelectedMovie} />
          </Fade>
        </div>
      : <div>
          <div>
            <Fade duration={1000}>
              <img src={selectedMovie.poster} className="rounded-sm" onClick={() => setSelectedMovie(null)}/>
            </Fade>
          </div>
        </div>
  )
}

export default App
