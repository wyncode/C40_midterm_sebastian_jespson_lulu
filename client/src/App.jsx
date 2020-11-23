import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <AppContextProvider>
      <div id="demo">
        <Home />
        {/* <h3>Hello from coding Elves</h3>
        <ContextDemo />
        <h3>{serverMessage}</h3> */}
      </div>
    </AppContextProvider>
  );
};

export default App;
