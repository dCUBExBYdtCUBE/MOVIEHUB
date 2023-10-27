import React, { useState } from 'react';
import FilterForm from './filter.js'
import './filter.css';

function ToggleDiv() {
  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDiv = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <div>
      <button onClick={toggleDiv} className='button'>Filter</button>
      <button className='search'>go</button>
      {isDivVisible && (
        <div>
          <FilterForm/>
        </div>
      )}
      
    </div>
  );
}

export default ToggleDiv;
