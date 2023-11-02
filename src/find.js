import logo from './logo.svg';
import target from './target.png';
import './search.css';
import Navbar from "./navbar";
import {useState} from 'react'
import ToggleDiv  from './button.js';
import Pagination from './pagination';
import MyComponent from './result';
import { useLocation } from 'react-router-dom';
function Find() {
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
      <p>Search results for "{textInput}"<br></br><br></br>
       <Pagination
        data={data}
        RenderComponent={MyComponent}
        pageLimit={pageLimit}
        dataLimit={dataLimit}
      /> 

      <div className='wrapper'>
        <div className='inside'><div className='bottom'>messi</div></div>
        <div className='inside'><div className='bottom'>ronaldo</div></div>
        <div className='inside'><div className='bottom'>pele</div></div>
        <div className='inside'><div className='bottom'>maradona</div></div>
        <div className='inside'><div className='bottom'>cruyff</div></div>
        <div className='inside'><div className='bottom'>zico</div></div>
        <div className='inside'><div className='bottom'>van basten</div></div>
        <div className='inside'><div className='bottom'>ronaldo</div></div>
        <div className='inside'><div className='bottom'>ronaldinho</div></div>
        <div className='inside'><div className='bottom'>henry</div></div>
        <div className='inside'><div className='bottom'>okocha</div></div>
        <div className='inside'><div className='bottom'>ibrahimovic</div></div>
        <div className='inside'><div className='bottom'>iniesta</div></div>
        <div className='inside'><div className='bottom'>xavi</div></div>
        <div className='inside'><div className='bottom'>gullit</div></div>
        <div className='inside'><div className='bottom'>zidane</div></div>
        <div className='inside'><div className='bottom'>scholes</div></div>
        <div className='inside'><div className='bottom'>maldini</div></div>
        <div className='inside'><div className='bottom'>zanetti</div></div>
        <div className='inside'><div className='bottom'>cafu</div></div>
        <div className='inside'><div className='bottom'>baresi</div></div>
        <div className='inside'><div className='bottom'>puyol</div></div>
        <div className='inside'><div className='bottom'>beckenbauer</div></div>
        <div className='inside'><div className='bottom'>messi</div></div>
        <div className='inside'><div className='bottom'>ronaldo</div></div>
        <div className='inside'><div className='bottom'>pele</div></div>
        <div className='inside'><div className='bottom'>maradona</div></div>
        <div className='inside'><div className='bottom'>cruyff</div></div>
        <div className='inside'><div className='bottom'>zico</div></div>
        <div className='inside'><div className='bottom'>van basten</div></div>
        <div className='inside'><div className='bottom'>ronaldo</div></div>
        <div className='inside'><div className='bottom'>ronaldinho</div></div>
        <div className='inside'><div className='bottom'>henry</div></div>
        <div className='inside'><div className='bottom'>okocha</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'><img src="account.png" alt="pls work"></img></a><div className='bottom'>ibrahimovic</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>iniesta</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>xavi</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>gullit</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>zidane</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>scholes</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>maldini</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>zanetti</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>cafu</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>baresi</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>puyol</div></div>
        <div className='inside'><a href='https://www.google.com/' target='_blank'>temp</a><div className='bottom'>beckenbauer</div></div>
      
      
      
      </div></p>
    </div>
  );
}
export default Find;