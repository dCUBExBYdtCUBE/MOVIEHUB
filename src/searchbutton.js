import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
export default function SrButton() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      // 👇️ navigate programmatically
      navigate('/find');
    };
  
    return (
        <div style={{marginTop:"-900px", paddingLeft:"470px"}} >
        <Button variant="contained" 
            onClick={handleClick}
            style={{maxHeight: '55px' ,
                minHeight:'55px' ,
                maxWidth:'300px',
                minWidth:'300px'}} 
                >SEARCH!</Button>
    
    </div>
    );
  }