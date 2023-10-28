import React from 'react'

function MyComponent({ data }) {
    return (
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    );
  }
  
export default MyComponent;