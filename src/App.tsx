import MovieGrid from './Components/MovieGrid';
import { Movies } from './Data/movies';
import './Styles/styles.css';

function App() {
  return (
    <>
      <MovieGrid movies={Movies} onSelect={movie => console.log(movie)} />
    </>
  )
}

export default App
