import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DonateForm from './components/Form/DonateForm';
// import Map from './components/Map/map';
// import DonateForm from './components/Form/DonateForm';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Team from './components/Team/Team';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import donateResult from './components/donateResult';
import { AppContextProvider } from './context/AppContext';
import allForms from './components/Form/allForms';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route exact path="/showcase" component={donateResult} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
