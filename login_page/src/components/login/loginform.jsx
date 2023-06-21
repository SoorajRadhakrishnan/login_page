import React, { useState } from 'react';
import './loginform.css';
import Logo from './Rexav Logo.png'

const LoginPage = ({ toggleSignup }) => {
    const handleSignUpClick = () => {
    window.location.href = '/signup';
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, such as making an API request
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Reset form fields
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div>
            <div className='logo-container'>
        <img src={Logo} alt='Logo' className='logo' />
      </div>

      <div className='login-page'>
    <div className='login-page'>
      <h2>Log in to Rexav Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder='Email'
            onChange={handleEmailChange}
            required
            className='box'
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={handlePasswordChange}
            required
            className='box'
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Remember Me
          </label>
        </div>
        <button type="submit" className='loginbox'>Login</button>


        <a href="/forgot-password">Forgot Password</a>
        
      </form>

    </div>
    </div>
    <div className='signup-box' >
    Dont have an account? <a onClick={toggleSignup}>Sign Up</a>
      
    </div>
         </div>
  );
};

export default LoginPage;
