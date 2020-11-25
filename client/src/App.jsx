import React from 'react';
import DonateForm from './components/Form/DonateForm';
// import Map from './components/Map/map';
// import DonateForm from './components/Form/DonateForm';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Team from './components/Team/Team';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DonateResult from './components/DonateResult';
import { AppContextProvider } from './context/AppContext';
import allForms from './components/Form/allForms';
const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route exact path="/donateresult" component={DonateResult} />
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
