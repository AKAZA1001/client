import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <div className="auth-container">
          <Login handleLogin={handleLogin} />
          <Signup handleSignup={handleSignup} />
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default App;
