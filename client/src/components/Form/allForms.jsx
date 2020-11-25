import React from 'react';
import DonateForm from './DonateForm';
import GiftToyForm from './GiftToyForm';

function AllForms() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <GiftToyForm />
      <DonateForm />
    </div>
  );
}

export default AllForms;
