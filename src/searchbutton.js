import React from 'react';
import Button from '@mui/material/Button';
import {useEffect,useState} from 'react';
import LoadingScreen from './loading';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeDataAction } from './actions';

export default function SrButton(props) {
    const navigate = useNavigate();
    const {textInput}=props;
    const[Data,setData]=useState("");
    const [loading, setLoading] = useState(false)
    const[member,setMember]=useState("");
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      setMember(searchParams.get('member'));
    }, [location.member]);
    const handleClick = async() => {
      
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 90000);
      await fetch('http://localhost:8000/api?' + new URLSearchParams({ message: textInput }))
        .then((response) => {
          if (response.ok) {
            // 👇️ navigate programmatically
            
            return response.json();
            
          } 
          else {
            console.error('API request failed');
          }
        })
        .then((data) => {
          setData(data);
          console.log(data);
          // Assuming 'data' holds the fetched information
          dispatch(storeDataAction(data));
          if(member){
            navigate(`/find?search=${textInput}&member=${member}`);}
          else{
            navigate(`/find?search=${textInput}&member=guest`);
          }
          
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
          setLoading(true);
          if(member){
            navigate(`/notfind?search=${textInput}&member=${member}`);}
          else{
            navigate(`/notfind?search=${textInput}&member=guest`);
          }

        });
          clearTimeout(timer);
          setLoading(false);       
    
      
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