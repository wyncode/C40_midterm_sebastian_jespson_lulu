import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Map from './Map/map';

//item.charityName,
//item.webddress.streetAddress1
//item.mailingAdsiteURL(most of them are null)
//item.mailingAdress.city
//item.mailingAddress.stateOrProvince
//item.mailingAddress.postalCode

const DonateResult = () => {
  const { charities } = useContext(AppContext);
  console.log('object');
  console.log(charities);
  const [address, setAddress] = useState();

  if (!charities) return null;
  return (
    <div>
      {charities &&
        charities.map((charity) => {
          console.log(charity);
          return (
            <div key={charity.ein}>
              <h3>{charity.charityName}</h3>
              <p>{charity.mailingAddress.streetAddress1}</p>
              <p>{charity.mailingAddress.city}</p>
              <p>{charity.mailingAddress.stateOrProvince}</p>
              <p>{charity.mailingAddress.postalCode}</p>
              <p>{charity.mailingAdsiteURL}</p>
            </div>
          );
        })}
      <Map />
    </div>
  );
};

export default DonateResult;
