import React from 'react';
import './Navbar.css';
import About from '../About/About';
import Home from '../Home/Home';
import Team from '../Team/Team';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        {/* <Link style={navStyle} to="/">
          <li>Home</li>
        </Link> */}
        <a href="/">
          <li>Home</li>
        </a>
        {/* <Link style={navStyle} to="/about">
          <li>About</li>
        </Link> */}
        <a href="/about">About</a>
        {/* <Link style={navStyle} to="/team">
          <li>Team</li>
        </Link> */}
        <a href="/team">Team</a>
      </ul>
    </div>
  );
};

export default Navbar;
