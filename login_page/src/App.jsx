import React, { useState } from 'react';
import LoginForm from './components/login/loginform';
import Signup from './components/signup/signup';

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleToggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      {showSignup ? <Signup toggleSignup={handleToggleSignup} /> : <LoginForm toggleSignup={handleToggleSignup} />}
    </div>
  );
};

export default App;
