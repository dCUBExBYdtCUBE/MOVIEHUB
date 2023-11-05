import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Find from './find';
import FavoritePage from './fav_page';
import LoginForm from './login_page';
import SignupForm from './signup_page';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
        <Route path="/react-gh-pages" element={<MyApp />} />

        <Route path="/find" element={<Find />} />

        <Route path="/signup" element={<SignupForm />} />

        <Route path="/login" element={<LoginForm />} />
        
        <Route path="/fav_page" element={<FavoritePage />} />
      </Routes>
      </Router></React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
