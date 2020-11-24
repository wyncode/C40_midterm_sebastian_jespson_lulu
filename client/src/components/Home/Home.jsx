import React from 'react';
import './Home.css';
import Showcase from '../Showcase/Showcase';
import DonateForm from '../Form/DonateForm';
import GiftToyForm from '../Form/GiftToyForm';

const Home = () => {
  return (
    <div className="home">
      <Showcase />
      <DonateForm />
      <GiftToyForm />
    </div>
  );
};

export default Home;
