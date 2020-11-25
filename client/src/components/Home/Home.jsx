import React from 'react';
import './Home.css';
import Showcase from '../Showcase/Showcase';
import AllForms from '../Form/allForms';

const Home = () => {
  return (
    <div className="home">
      <Showcase />
      <p>
        <strong className="word">
          How would you like to help someone today?
        </strong>
      </p>
      <AllForms />
    </div>
  );
};

export default Home;
