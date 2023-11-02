import './App.css';
import './search.css';
import React from 'react';
import bg from "./img/background.jpg";
import {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import {BoxComponent} from './login';
import TextField from '@mui/material/TextField';
import Navbar from './navbar.js';
import SrButton from './searchbutton';

function MyApp(){
    const [textInput, setTextInput] = useState('');
    const handleTextInputChange=(event)=>{
        setTextInput(event.target.value);
    }
    
    useEffect(() => {
        console.log(textInput)
    }, [textInput]);
    
    return(
        
        <div style={{backgroundImage:`url(${bg})`,
                    backgroundSize: "auto",
                    backgroundPosition: 'center top',
                    height:"1350px",
                    overflow: "hidden"

        }}>
            <Navbar/>
            <div style={{ paddingLeft:"400px"}}>
                <h1 style={{color:"#122557",fontSize: "6rem" }}>MOVIEHUB</h1>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
                /></div>
                
                <div style={{paddingLeft:"305px"}}>
                    <TextField id="filled-basic" 
                        variant="filled" 
                        sx={{width:680,height:1000}} 
                        inputProps={{min: 0, 
                                style: { textAlign: 'center' ,fontSize: 19 }
                                }
                            }
                        onChange= {handleTextInputChange}


                                /></div>
                       
                
                    <div>{textInput&&<SrButton textInput={textInput}/>}</div>
                
                </div>
                
    )
}

export default MyApp;

