import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function DonateForm() {
  const [charities, setCharities] = useState([]);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    //code here what to do with data
  };

  const searchApi = async () => {
    try {
      const response = await axios.get('/charitysearch');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="county"
        name="county"
        ref={register({ required: 'COUNTY REQUIRED EX: North Miami' })}
      />
      <br></br>
      {errors.county && <p>{errors.county.message}</p>}
      <br></br>
      <input type="submit" id="submit" />
    </form>
  );
}
export default DonateForm;
