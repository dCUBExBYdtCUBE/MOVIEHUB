import React from 'react'
function MyComponent({ id, data, removeFromFavorites, isFavoritesPage }) {
    
    return (
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        {isFavoritesPage && (
        <button className='search' onClick={() => removeFromFavorites(id)}>Remove</button>
      )}
      </div>
    );
  }
  
export default MyComponent;