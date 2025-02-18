import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import MovieGrid from './Components/MovieGrid';
import MovieView from './Components/MovieView';
import { Movies } from './Data/movies';
import { IMovie } from './types';
import './Styles/styles.css';

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
              <MovieView movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>
            </Fade>
          </div>
        </div>
  )
}

export default App
