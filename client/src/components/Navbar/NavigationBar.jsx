import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { NONAME } from 'dns';

const Navigationbar = () => {
  const navStyle = {
    color: 'white'
  };
  return (
    <div>
      <ul className="navbar">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/team">
          <li>Team</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigationbar;
