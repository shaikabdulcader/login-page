import React, { useState } from 'react';
import './App.css';
import sideimg from './assets/img/sideimg.png';
import logo from './assets/img/companylogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <img src={logo} alt="Logo" className="logo"/>
        <img src={sideimg} alt="Login" className="login-image"/>
      </div>
      <div className="right-panel">
        <h1>Login</h1>
        <p>Welcome!</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Your Email" />
          </div>
          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter Your Password"
              />
              <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div className="form-group">
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>
          <div className="form-group">
            <button type="submit" className="btn">SIGN IN</button>
          </div>
        </form>
        <p>Not Having an Account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}

export default App;
