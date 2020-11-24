import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DonateForm from './components/Form/DonateForm';
import './App.css';
import Showcase from './components/Showcase';
import { AppContextProvider } from './context/AppContext';
import allForms from './components/Form/allForms';
const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={allForms} />
          <Route exact path="/showcase" component={Showcase} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
