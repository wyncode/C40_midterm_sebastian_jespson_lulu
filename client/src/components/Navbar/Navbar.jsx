import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Team</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
