import React from 'react';
import './Home.css';
import Showcase from '../Showcase/Showcase';
import AllForms from '../Form/AllForms';

const Home = () => {
  return (
    <div className="home">
      <Showcase />
      <AllForms />
    </div>
  );
};

export default Home;
