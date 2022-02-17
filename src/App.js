import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import './index.css';
import Heading from "./components/Heading";
import AddFavorite from './components/AddFavorite';
import RemoveFavorite from './components/RemoveFavorite';
import Axios from 'axios';

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
  }

  useEffect((e) => {
    getSearchRequest(e);
  }, [setSearch]);

  const addToFavorite = (movie) => {
    const uniqueArray = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID)
    const newFav = [...uniqueArray, movie];
    setFavorites(newFav);
    console.log("Added to Favorites");
    Axios.post("http://localhost:5500/api/add-favorite", {
      movieID: movie.id
    })
  };

  const removeFromFavorite = (movie) => {
    const newFav = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFav);
    console.log("Removed from favorites");
  };

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
      <div className="d-flex movies-row-list">
        <div className="search-movies">
          <h2>Search result</h2>
          {movies ? <MovieList movies={movies} handleFavoriteBtnClick={addToFavorite}
            FavoriteButton={AddFavorite} /> : (<div className='search-message txt-center'>Search something...</div>)}
        </div>
        <div className="favorite-movies">
          <h2>Favorites</h2>
          <MovieList movies={favorites} FavoriteButton={RemoveFavorite} handleFavoriteBtnClick={removeFromFavorite} />
        </div>
      </div>
    </div >
  );
}

export default App;