import React, { useState, useEffect } from 'react';
import Find from './find';
import FilterForm from './filter';
import MovieList from './MovieList';

function ParentComponent() {
    
  const [movies, setMovies] = useState([]); 
  const [filteredMovies, setFilteredMovies] = useState([]); // State to hold filtered movies
 
  const [selectedReleased, setSelectedReleased] = useState([]); // State for selected release years
  const [selectedGenre, setSelectedGenre] = useState([]); // State for selected genres
  

  // Simulated function to fetch movies (replace this with actual API call)
  useEffect(() => {
    // Simulated movie data
    const fetchedMovies = Find.imdbData;
    setMovies(fetchedMovies); // Set fetched movies to state
    setFilteredMovies(fetchedMovies); // Initialize filtered movies with fetched movies
  }, []); // Run once on component mount

  // Function to handle filtering based on checkbox selections
  useEffect(() => {
    // Filter movies based on selected criteria
    const updatedMovies = movies.filter(movie => {
      
      const releasedMatch = selectedReleased.length === 0 || selectedReleased.includes(String(movie.release));
      const genreMatch = selectedGenre.length === 0 || selectedGenre.includes(movie.genre);
      

      return releasedMatch && genreMatch;
    });

    setFilteredMovies(updatedMovies); // Update filtered movies based on selected criteria
  }, [selectedReleased, selectedGenre, movies]);

  // Functions to handle checkbox changes in FilterForm
  // Assume you have functions like handleQualityChange, handleReleasedChange, handleGenreChange, handleCountryChange

  return (
    <div>
      <FilterForm
      
        
        handleReleasedChange={handleReleasedChange}
        handleGenreChange={handleGenreChange}
        
      />
      <MovieList movies={filteredMovies} />
      
    </div>
  );
}

export default ParentComponent;