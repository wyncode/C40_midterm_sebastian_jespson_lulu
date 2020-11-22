import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import FormOne from './components/Forms/FormOne';
import FormTwo from './components/Forms/FormTwo';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <FormOne />
      <FormTwo />
    </div>
  );
}

export default App;
