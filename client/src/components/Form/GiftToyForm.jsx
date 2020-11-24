import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

function GiftToyForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    //code here what to do with data
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        type="text"
        id="zipcode"
        name="zipcode"
        ref={register({
          required: 'ZIPCODE REQUIRED',
          maxlength: { value: 5, message: 'ex: 33181' }
        })}
      />
      <br></br>
      {errors.zipcode && <p>{errors.zipcode.message}</p>}
      <br></br>
      <input type="submit" id="submit" />
    </form>
  );
}
export default GiftToyForm;
