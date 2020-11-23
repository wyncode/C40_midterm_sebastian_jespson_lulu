import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
// import Showcase from '../Showcase/Showcase';
import DonateForm from '../DonateForm/DonateForm';
import GiftToyForm from '../GiftToyForm/GiftToyForm';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Showcase /> */}
      <DonateForm />
      <GiftToyForm />
    </div>
  );
};

export default Home;
