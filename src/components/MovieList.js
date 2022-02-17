const MovieList = ({ movies }) => {

    return (
        <div className=" movies-list container">
            {movies.map((movie, index) => (
                <div key={index} className="d-flex justify-content-start p-3 movie-preview">
                    <img src={movie.Poster} alt="movie poster" />
                    {/* <h3>{movie.Title}</h3>
                    <div className="movie-details">
                        <p><strong>Year: </strong>{movie.Year}</p>
                        <p><strong>Synopsis: </strong>{movie.Plot}</p>
                    </div> */}
                </div>
            ))}
        </div>
    );
}

export default MovieList;