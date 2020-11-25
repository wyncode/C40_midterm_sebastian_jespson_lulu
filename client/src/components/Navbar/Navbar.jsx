import React from 'react';
import './Navbar.css';
import About from '../About/About';
import Home from '../Home/Home';
import Team from '../Team/Team';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <link to="#" className="menu-bars">
            <FaIcons.AiOutlineBars />
          </link>
          <link>
            <Link to="/">Home</Link>
          </link>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <Route exact path="">
            {/* <About /> */}
          </Route>
          <Route exact path="">
            {/* <Team /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
