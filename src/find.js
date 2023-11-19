import target from './target.png';
import './search.css';
import Navbar from "./navbar1";
import {useState} from 'react'
import ToggleDiv  from './button.js';
import Pagination from './pagination';
import MyComponent from './result.js';
import { useLocation,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { colors } from '@mui/material';

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

function Find() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const textInput = searchParams.get('search');
  const imdbData = useSelector((state) => state.data) || [];
  
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 35 },
    { id: 4, name: 'Alice Williams', age: 40 },
    { id: 5, name: 'Tom Brown', age: 45 },
  ]); // your data array
  const pageLimit = 5;
  const dataLimit = 10;
  return (
    <div >
      <Navbar/>
      <ToggleDiv/>
       <Pagination
        data={data}
        RenderComponent={MyComponent}
        pageLimit={pageLimit}
        dataLimit={dataLimit}
      /> 

      <div className="App">
      <h1 style={{color:"white"}}>Search Results for "{textInput}"...</h1>
      <div className="movie-container">
        {imdbData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
      
      
    </div>
  );
}
export default Find;