import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Find from './find';
export default function SrButton(props) {
    const navigate = useNavigate();
    const {textInput}=props;
    const handleClick = () => {
      // 👇️ navigate programmatically
      navigate(`/find?search=${textInput}`);
    };
  
    return (
        <div style={{marginTop:"-900px", paddingLeft:"470px"}} >
        <Button variant="contained" 
            onClick={handleClick}
            textInput={textInput}
            style={{maxHeight: '55px' ,
                minHeight:'55px' ,
                maxWidth:'300px',
                minWidth:'300px'}} 
                > SEARCH!</Button>
    </div>
    );
  }