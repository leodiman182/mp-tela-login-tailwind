import React, { useState } from 'react';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [alert, setAlert] = useState(false);

  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const context = {
    alert,
    setAlert,
    usernameInput,
    setUsernameInput,
    passwordInput,
    setPasswordInput,
  };

  return (
    <MainContext.Provider value={context}>{children}</MainContext.Provider>
  );
}

export default MainProvider;
