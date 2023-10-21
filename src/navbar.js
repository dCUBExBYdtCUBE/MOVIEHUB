import target from './target.png';
import search from './search-259-32.png';
import './App.css';

function Navbar() {
  return (
    <div>
      <header>
        <nav>
        <ul className="left-side">
          <li><a
          className="App-link" 
          href="https://reactjs.org"
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
        </ul>
        <ul className="right-side">
        <li><a
          // className="nav navbar-nav navbar-right" 
          // className="my-navbar"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={search} height='26px'></img>
          search
        </a></li>

        <li><a
          // className="nav navbar-nav navbar-right" 
          // className="my-navbar"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={target} height='32px' width='32px'></img>
          profile
        </a></li>
          
        </ul>
        </nav>
      </header>   
</div>);}

export default Navbar;
