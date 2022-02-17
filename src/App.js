import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import './index.css';
import Heading from "./components/Heading";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const getSearchRequest = async (e) => {
    e.preventDefault();
    const SEARCH_URL = `http://www.omdbapi.com/?apikey=cc65292c&s=${search}?`;
    const data = await fetch(SEARCH_URL);
    const JSONResponse = await data.json();
    const movies = JSONResponse.Search;
    setMovies(movies);
    console.log(movies);
  }

  useEffect((e) => {
    getSearchRequest(e);
  }, [setSearch]);

  const addToFavorite = (movie) => {
    const newFav = [...favorites, movie];
    setFavorites(newFav);
  }

  return (
    <div className="container home" >
      <div className="navbar">
        <div className='txt-center'>
          <Heading heading={"Nutflix"} />
        </div>
        <form onSubmit={getSearchRequest} className="d-flex search">
          <input
            name='search'
            id='movie-search'
            type="search"
            placeholder='Search a movie or series'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }} />
          <button className='btn' type='submit'>Search</button>
        </form>
      </div>
      <div className="movies-row-list">
        <div className="movies">
          {movies ? <MovieList movies={movies} handleFavoriteBtnClick={addToFavorite} /> : (<div className='search-message'>Search something...</div>)}
        </div>
      </div>
    </div >
  );
}

export default App;