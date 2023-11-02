import search from './search-259-32.png';
import './App.css';
import './search.css'
import { BoxComponent } from './login';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/react-gh-pages');
  };

  const handleClickfav=()=>{
    navigate('/favourite');
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
          target="_blank"
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
          onClick={handleClickfav}
          target="_blank"
          rel="noopener noreferrer"
        >Favourites
        </a></li>

        </ul>
        <ul className="right-side">
        

        <li><BoxComponent/></li>
          
        </ul>
        </nav>
      </header>   
</div>);}

export default Navbar;
