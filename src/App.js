import './App.css';
import './navbar.js';
import './search.css';
import React from 'react';
import bg from "./img/background.jpg";
import {useState} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from './search.js';
function MyApp(){
    const [textInput, setTextInput] = useState('');
    const handleTextInputChange=(event)=>{
        setTextInput(event.target.value);
        console.log(textInput)
    }
    return(
        <div style={{backgroundImage:`url(${bg})`,
                    backgroundSize: "auto",
                    backgroundPosition: 'center top',
                    height:"1350px"
        }}>
            <Navbar/>
            <div style={{paddingTop:"100px", paddingLeft:"400px"}}>
                <h1 style={{color:"#122557",fontSize: "6rem" }}>MOVIEHUB</h1>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                /></div>
                
                <div style={{paddingLeft:"270px"}}>
                    <TextField id="filled-basic" 
                        variant="filled" 
                        sx={{width:680,height:1000}} 
                        inputProps={{min: 0, 
                                style: { textAlign: 'center' ,fontSize: 19 }
                                }
                            }
                        onChange= {handleTextInputChange}

                                />

                <Button variant="contained" 
                    href="#contained-buttons" 
                    style={{maxHeight: '55px' , minHeight:'55px'}} >Link</Button>
                    
                </div>
            </div>
    )
}

export default MyApp;
