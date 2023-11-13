import React, { useState } from 'react';
import './login.css'
import bg from "./img/background.jpg";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const [name, setName] = useState('');

    const guest=()=>{
        navigate('/react-gh-pages?member=guest');
    }

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulated authentication logic (replace with your authentication logic)

      try{

          await axios.post("http://localhost:8000/",{
              email,password
          })
          .then(res=>{
              console.log(res);
              if(res.data!=="notexist"){
                  navigate("/react-gh-pages?member="+res.data.name)
              }
              else {
                  alert("Incorrect Password")
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

  }
  

  return (
    <div style={{backgroundImage:`url(${bg})`,
    backgroundSize: "auto",
    backgroundPosition: 'center top',
    height:"1350px",
    overflow: "hidden"

}}>
    <div className='container'>
        <div className='in-side'>
        <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          {/* <label>Email:</label> */}
          <input class="login"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input class="login"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='but' type="submit">Login</button>
        <button className="but" type="button" onClick={guest}>Continue as Guest</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
    </div>
    </div>
  );
}

export default LoginForm;
