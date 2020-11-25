import React from 'react';
import AllForms from '../src/components/Form/AllForms';
// import Map from './components/Map/map';
// import DonateForm from './components/Form/DonateForm';
import NavigationBar from './components/Navbar/NavigationBar';
import Home from './components/Home/Home';
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
          <NavigationBar pageWrapId={'page-wrap'} outerContainerId={'App'} />

          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/donateresult" component={DonateResult} />
            <Route exact path="/Giftresult" component={GiftResult} />
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
};
export default App;
