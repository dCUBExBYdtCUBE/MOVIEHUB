import React, { useState } from 'react';
import './login.css';
import bg from "./img/background.jpg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    const guest=()=>{
        navigate('/react-gh-pages?member=guest');
    }

  const handleSignup = async (e) => {
    e.preventDefault();

    // Simulated registration logic (replace with your registration logic)
    if (name && email && password) {
    
        try{
    
            await axios.post("http://localhost:8000/signup",{
                name,email,password
            })
            .then(res=>{
                console.log(res.data);
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    navigate("/login",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
    
        }
        catch(e){
            console.log(e);
    
        }
    

      // Successful registration
      alert('Registration successful');
    } else {
      // Registration failed due to missing fields
      setErrorMessage('Please fill in all fields');
    }
  };

  return (
    <div style={{backgroundImage:`url(${bg})`,
    backgroundSize: "auto",
    backgroundPosition: 'center top',
    height:"900px",
    overflow: "hidden"

}}> 
    <div className='container'>
        <div className='in-side'>
      <h1 >Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div>
          {/* <label>Name:</label> */}
          <input
          className="input"
          placeholder="Enter your Username"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label>Email:</label> */}
          <input
            className="login"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input
            className="login"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='but' type="submit">Sign Up</button>
        <button className="but" type="button" onClick={guest}>Continue as Guest</button>

      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
    </div>
    </div>
  );
}

export default SignupForm;
