import { Header } from './components/Header';
import './App.css';
import { MoviesList } from './components/MoviesList';
import { MoviesContainer } from './styles/MoviesContainer';
import { useEffect, useState } from 'react';
import { MoviesService } from './services/MoviesService';

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async() => {
    const data = await MoviesService.getMovies();
    setMovies(data.data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />

      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;
