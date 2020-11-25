import React from 'react';
import Home from './components/Home/Home';
import Navigationbar from './components/Navbar/NavigationBar';
import About from './components/About/About';
import Team from './components/Team/Team';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DonateResult from './components/DonateResult';
import GiftResult from './components/GiftResult';
import { AppContextProvider } from './context/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <Navigationbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route exact path="/donateresult" component={DonateResult} />
            <Route exact path="/giftresult" component={GiftResult} />
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
