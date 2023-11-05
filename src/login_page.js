import React, { useState } from 'react';
import './login.css'
import bg from "./img/background.jpg";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const [name, setName] = useState('');

    const guest=()=>{
        navigate('./react-gh-pages');
    }

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulated authentication logic (replace with your authentication logic)
    if (email === 'user@example.com' && password === 'password123') {
      // Successful login
      alert('Logged in successfully');
    } else {
      // Failed login
      setErrorMessage('Invalid email or password');
    }
  };

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
