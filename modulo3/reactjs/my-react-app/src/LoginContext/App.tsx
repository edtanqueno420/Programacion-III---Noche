import React, { useState } from 'react';
import { LoginContext } from './LoginContext';
import LoginStatus from './LoginStatus';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <LoginStatus />
    </LoginContext.Provider>
  );
}