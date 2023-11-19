import './App.css';
import './search.css';
import React from 'react';
import bg from "./img/background.jpeg";
import {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import {BoxComponent} from './login';
import TextField from '@mui/material/TextField';
import Navbar from './navbar1.js';
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
                        backgroundSize: "contain",
                        backgroundRepeat:"no-repeat",
                        backgroundPosition: 'center top',
                        height:"880px",
                        overflow: "hidden"

        }}>
            <Navbar/>
            <div style={{ paddingLeft:"400px",paddingTop:"100px"}}>
                <h1 style={{textShadow: '8px 8px 8px #000000', color:"#e1caeb",fontSize: "6rem" }}>MOVIEHUB</h1>
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

