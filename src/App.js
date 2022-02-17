import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getSearchRequest = async () => {
    const data = await fetch("http://www.omdbapi.com/?apikey=cc65292c&s=" + search + "?")
    const JSONResponse = await data.json();
    const movies = JSONResponse.Search;
    setMovies(movies);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    getSearchRequest();
  }

  // useEffect(() => {
  //   getSearchRequest();
  // }, []);



  return (
    <div className="container-fluid home movies-row-list" >
      <form onSubmit={handleSearch} className="search">
        <input
          name='search'
          id='movie-search'
          type="search"
          placeholder='Search a movie or series'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }} />
        <button type='submit'>Search</button>
      </form>

      <div className="row movies">
        <MovieList movies={movies} />
      </div>
    </div >
  );
}

export default App;