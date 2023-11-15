import search from './search-259-32.png';
import React, { useState,useEffect } from 'react';
import './App.css';
import './search.css'
import Login from './login';
import BoxComponent from './box';
import { useNavigate,useLocation } from 'react-router-dom';

function Navbar() {
  const[member,setMember]=useState("");
  const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setMember(searchParams.get('member'));
  }, [location.member]);
  const navigate = useNavigate();
  
  const handleClick = () => {
    // 👇️ navigate programmatically
    if(member){
      navigate(`/react-gh-pages?member=${member}`);}
    else{
      navigate('/react-gh-pages?member=guest')
      }  };

  const gotofav = () => {
    if(member){
    navigate(`/fav_page?member=${member}`);}
    else{
      navigate('/fav_page?member=guest')
    }
  };
  const signup = () => {
    navigate('/signup');
  };

  const login = () => {
    navigate('/login');
  }

  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseLeave() {
    setIsMouseOver(false);
  }

  return (

    <div>
      <header>
        <nav 
>
        <ul className="left-side">
          <li><a
          className="App-link" 
          onClick={handleClick}
          target="_self"
          rel="noopener noreferrer"
        >Home
        </a></li>
        

        <li><a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Genre
        </a></li>

        <li><a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Top Rated
        </a></li>

        <li><a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Language
        </a></li>

        <li><a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Movies
        </a></li>

        <li><a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >TV shows
        </a></li>

        <li><a
          className="App-link" 
          onClick={gotofav}
          target="_self"
          rel="noopener noreferrer"
        >Favorites
        </a></li>

        </ul>
        <ul className="right-side">
        

        <li><BoxComponent/></li>
          
        </ul>
        </nav>
      </header>   
</div>);}

export default Navbar;