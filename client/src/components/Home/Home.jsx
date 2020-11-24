import React from 'react';
import './Home.css';
import Showcase from '../Showcase/Showcase';
import allForms from '../Form/allForms';

const Home = () => {
  return (
    <div className="home">
      <Showcase />
      <allForms />
    </div>
  );
};

export default Home;
