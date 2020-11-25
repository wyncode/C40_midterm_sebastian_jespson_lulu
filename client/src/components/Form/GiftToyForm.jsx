import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import GiftBoxToy from '../Resources/GiftBox Toy/GiftBoxToy';
import { withRouter } from 'react-router-dom';

function GiftToyForm({ history }) {
  const [zip, setZip] = useState('');
  const { register, errors } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/giftresult');
  };
  const zipChange = (event) => {
    setZip(event.target.value);
  };
  const onSubmit = (data) => {
    //code here what to do with data
  };
  return (
    <div>
      <p>Gift a Toy</p>
      <GiftBoxToy />
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          ref={register({
            required: 'ZIPCODE REQUIRED',
            maxlength: { value: 5, message: 'ex: 33181' }
          })}
          onChange={zipChange}
        />
        <br></br>
        {errors.zipcode && <p>{errors.zipcode.message}</p>}
        <br></br>
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}
export default withRouter(GiftToyForm);
