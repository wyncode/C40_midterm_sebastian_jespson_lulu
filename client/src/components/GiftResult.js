import React from 'react';
import './components/GiftResult.css';
import MiamiDriveMap from './Map/MiamiDriveMap';

//item.charityName,
//item.webddress.streetAddress1
//item.mailingAdsiteURL(most of them are null)
//item.mailingAdress.city
//item.mailingAddress.stateOrProvince
//item.mailingAddress.postalCode

const DonateResult = () => {
  return (
    <div>
      <div class="container">
        <h4>
          <b>Amigos for Kids at CasaCuba </b>
        </h4>
        <p>5859 SW 73rd Street</p>
        <p>Miami</p>
        <p>Florida</p>
        <p>33143</p>
      </div>
      <div class="container">
        <h4>
          <b>Amigos for Kids at CasaCuba </b>
        </h4>
        <p>3501 SW 8th Street</p>
        <p>Miami</p>
        <p>Florida</p>
        <p>33143</p>
      </div>
      <div class="container">
        <h4>
          <b>Amigos for Kids at CasaCuba </b>
        </h4>
        <p>3632 SW 8th Street</p>
        <p>Miami</p>
        <p>Florida</p>
        <p>33143</p>
      </div>
      <div class="container">
        <h4>
          <b>Amigos for Kids at CasaCuba </b>
        </h4>
        <p>8650 SW 40th Street</p>
        <p>Miami</p>
        <p>Florida</p>
        <p>33143</p>
      </div>
      <div class="container">
        <h4>
          <b>Amigos for Kids at CasaCuba </b>
        </h4>
        <p>11740 SW 88th Street</p>
        <p>Miami</p>
        <p>Florida</p>
        <p>33143</p>
      </div>
      <MiamiDriveMap />
    </div>
  );
};

export default DonateResult;
