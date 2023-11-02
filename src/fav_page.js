import React, { useState } from 'react';
import ToggleDiv from './button';
import MyComponent from './result';
import Navbar from './navbar';

function FavoritePage() {
  const [data, setData] = useState([
    { id: 1, title: 'Item 1', description: 'Description 1' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
    { id: 3, title: 'messi', description:'Description 3'}
    // Add more items as needed
  ]);

  const handleRemoveFromFavorites = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <Navbar />
      <ToggleDiv />
      <p>
        Your Favorites
        <div className="wrapper">
          {data.map((item) => (
            <MyComponent
            key={item.id}
            id={item.id}
            data={item}
            removeFromFavorites={handleRemoveFromFavorites}
            isFavoritesPage={true}
          />          
          ))}
        </div>
      </p>
    </div>
  );
}

export default FavoritePage;

