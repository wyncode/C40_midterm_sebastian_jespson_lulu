import React from 'react';
// import Map from './components/Map/map';
// import DonateForm from './components/Form/DonateForm';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Team from './components/Team/Team';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
