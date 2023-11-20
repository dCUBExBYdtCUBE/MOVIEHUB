import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function MovieCard({ movie }) {
    
    const movieURL = `https://movie-web.app${movie.link}`; // Construct the URL
    return (
      <div className='movie-container'>
      <div className="movie-card">
        <div className='movie-content'>
        <Link to={movieURL} className="movie-card-link" style={{ display: 'inline-block' }}>
          <img src={movie.poster} alt={`${movie.name} Poster`} />
          <h3>{movie.name}</h3>
          <p>Release Year: {movie.release}</p>
          <p>IMDb Rank: {movie.rank}</p>
          {movie.genre && (
            <p>Genres: {movie.genre.join(', ')}</p>
          )}
        </Link>
        </div>
      </div>
      </div>
    );
  }
function MovieList({ movies, selectedReleased, selectedGenre}) {
    // Filtering logic based on selected checkbox values
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const textInput = searchParams.get('search');
    const filteredMovies = movies.filter(movie => {
     
      const releasedMatch = selectedReleased.includes('All') || selectedReleased.includes(String(movie.release));
      const genreMatch = selectedGenre.includes('All') || selectedGenre.includes(movie.genre);
     
      return  releasedMatch && genreMatch ;
    });
  
    // Render filtered movies
    return (
      <div className="App">
      <h1 color="white">Search Results for "{textInput}"...</h1>
      <div className="movie-container">
        {filteredMovies.map(movie,index => (
          <MovieCard key={index} movie={movie} />
            
          
        ))}</div>
      </div>
    );
  }
  
  export default MovieList;