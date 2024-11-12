import './App.css';

import Background from './Components/Background';
import MovieList from './Components/MovieList';
import MovieData from './Data/MovieData';

import gps from "./Assets/gps.png";


function App() {

  const content = (
    <div>
      <p className="mb-1 flex flex-col items-center justify-center text-5xl text-gray-700 cursor-default">The World of James Bond</p>
      <br></br>
      <MovieList movies={MovieData} />
    </div>
  )

  return (
      <Background content={content} imageUrl={gps}/>
  );
}

export default App;
