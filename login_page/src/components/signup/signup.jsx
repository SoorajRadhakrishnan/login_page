import React, { useState } from 'react';
import './signup.css';
import Logo from './Rexav Logo.png'


const SignUp = ({ toggleSignup }) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here, such as making an API request
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
                <div className='logo-container2'>
        <img src={Logo} alt='Logo' className='logo' />
      </div>

    <div className='signup-page'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            placeholder='Your Name'
            onChange={handleNameChange}
            required
            className='box'
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder='Your Email'
            onChange={handleEmailChange}
            required
            className='box'
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            placeholder='Your Phone Number'
            onChange={handlePhoneChange}
            required
            className='box'
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder='Create Password'
            onChange={handlePasswordChange}
            required
            className='box'
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder='Confirm Password'
            onChange={handleConfirmPasswordChange}
            required
            className='box'
          />
        </div>
        <button onClick={toggleSignup} type="submit" className='signup-button'>Sign Up</button>
      </form>
    </div>

    </div>
  );
};

export default SignUp;
