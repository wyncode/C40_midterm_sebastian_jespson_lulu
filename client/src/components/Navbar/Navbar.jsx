import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { NONAME } from 'dns';

const Navbar = () => {
  const navStyle = {
    color: 'white'
  };
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
