const MovieList = ({ movies, FavoriteButton, handleFavoriteBtnClick }) => {

    return (
        <div className="movies-list">
            {movies.map((movie, index) => (
                <div key={index} className="d-flex movie-preview">
                    <div className="movie-container d-flex">
                        <div className="poster-container"><img className="poster" src={movie.Poster} alt="movie poster" /></div>
                        <div className="movie-details">
                            <div className="details">
                                <h2 className="movie-heading">{movie.Title}</h2>
                                <small>Released: {movie.Year}</small>
                                <p className="movie-plot">{movie.Plot}</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => handleFavoriteBtnClick(movie)}>
                        <FavoriteButton />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieList;