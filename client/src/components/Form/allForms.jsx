import React from 'react';
import DonateForm from './DonateForm';
import GiftToyForm from './GiftToyForm';

function allForms() {
  return (
    <div>
      <GiftToyForm />
      <DonateForm />
    </div>
  );
}

export default allForms;
