import React, { useState } from 'react';
function FilterForm() {
  const [selectedQuality, setSelectedQuality] = useState([]);
  const [selectedReleased, setSelectedReleased] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);


  const releasedOptions = ["All", "2023", "2022", "2021", "2020", "2019", "Older"];
  const genreOptions = [
    "Action", "Action & Adventure", "Adventure", "Animation", "Biography", "Comedy",
    "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Kids",
    "Music", "Mystery", "News", "Reality", "Romance", "Sci-Fi & Fantasy", "Science Fiction",
    , "Talk", "Thriller", "TV Movie", "War", "War & Politics", "Western"
  ];
 

  const handleReleasedChange = (e) => {
    const value = e.target.value;
    setSelectedReleased((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const handleGenreChange = (e) => {
    const value = e.target.value;
    setSelectedGenre((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };



  return (
    <div className='choice'>
      <h3>Type:</h3>
      <label>
        <input class="name" type="radio" name="type" value="All" /> All
      </label>
      <label>
        <input class="name" type="radio" name="type" value="Movies" /> Movies
      </label>
      <label>
        <input class="name" type="radio" name="type" value="TV Shows" /> TV Shows
      </label>



      <h3>Released:</h3>
      {releasedOptions.map((option) => (
        <label key={option}>
          <input
            class="name"
            type="checkbox"
            value={option}
            checked={selectedReleased.includes(option)}
            onChange={handleReleasedChange}
          /> {option}
        </label>
      ))}

      <h3>Genre:</h3>
      {genreOptions.map((option) => (
        <label key={option}>
          <input
            class="name"
            type="checkbox"
            value={option}
            checked={selectedGenre.includes(option)}
            onChange={handleGenreChange}
          /> {option}
        </label>
      ))}


    </div>
  );
}

export default FilterForm;