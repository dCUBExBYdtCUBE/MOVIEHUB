import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import target from './target.png';
import Login from './login'; // Import the Login component
import { useNavigate } from 'react-router-dom';



function BoxComponent() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [textInput, setTextInput] = useState('');
  const navigate = useNavigate();
  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseLeave() {
    setIsMouseOver(false);
  }

  function handleTextInputChange(event) {
    setTextInput(event.target.value);
  }

  const handleLoginClick=()=>{
    navigate('/login');
  }

  const handleSignUpClick=()=>{
    navigate('/signup');
  }

  return (
    <Box component="span" sx={{ p: 2 }} onMouseOver={handleMouseOver} onMouseOut={handleMouseLeave}>
      <Button>
        <b position="static">Profile</b>
        <img src={target} height="32px" width="32px" alt="Profile" />
      </Button>
      
      {/* Conditionally render the Login component when the user hovers over the area */}
      {isMouseOver && (
        <div>
          <Button onClick={handleLoginClick}>Login</Button>
          <Button onClick={handleSignUpClick}>Sign Up</Button>
        </div>
      )}
    </Box>
  );
}

export default BoxComponent;


