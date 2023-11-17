import './search.css';
import Navbar from "./navbar1";
import {useState} from 'react'
import ToggleDiv  from './button.js';
import Pagination from './pagination';
import MyComponent from './result';
import { useLocation,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NOTFind() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const textInput = searchParams.get('search');
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 4, name: 'Alice Williams', age: 40 },
        { id: 5, name: 'Tom Brown', age: 45 },
      ]); // your data array
      const pageLimit = 5;
      const dataLimit = 10;
  return (
    <div >
      <Navbar/>
      <ToggleDiv/>
       <Pagination
        data={data}
        RenderComponent={MyComponent}
        pageLimit={pageLimit}
        dataLimit={dataLimit}
      /> 

      <div >
      <p>Your search - {textInput} - did not match any movies.</p>
      <p>
        Suggestions:
        </p>
        <p>
        <ul>

            <li>Make sure that all words are spelled correctly.</li>
            <li>Try different keywords.</li>
            <li>Try more general keywords.</li>
        </ul>

      </p>
    </div>
      
      
    </div>
  );
}
export default NOTFind;