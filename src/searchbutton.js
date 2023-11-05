import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import {useEffect,useState} from 'react';
import LoadingScreen from './loading';
export default function SrButton(props) {
    const navigate = useNavigate();
    const {textInput}=props;
    const[Data,setData]=useState("");
    const [loading, setLoading] = useState(false)
    
    const handleClick = async() => {
      
      setLoading(true);
      await fetch('http://localhost:8000/api?' + new URLSearchParams({ message: textInput }))
        .then((response) => {
          if (response.ok) {
            // 👇️ navigate programmatically
            navigate(`/find?search=${textInput}`);
            return response.json();
            
          } 
          else {
            console.error('API request failed');
          }
        })
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
        });
    
      
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

        {loading && <LoadingScreen />}
    </div>
    );
  }