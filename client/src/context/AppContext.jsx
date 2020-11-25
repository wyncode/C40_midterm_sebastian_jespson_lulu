import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contextMessage, setContextMessage] = useState('');
  const [charities, setCharities] = useState([]);
  const [token, setToken] = useState('');
  const contextMethod = () => {
    setContextMessage('Hello from client/src/context/AppContext.jsx');
  };

  useEffect(() => {
    const getToken = async () => {
      const resp = await axios.get('/mapboxapi');
      setToken(resp.data);
    };
    try {
      getToken();
    } catch (error) {
      console.log(error);
    }
  }, [setToken]);

  return (
    <AppContext.Provider
      value={{
        contextMessage,
        contextMethod,
        charities,
        setCharities,
        token
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
