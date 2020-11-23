import React from 'react';
import { useForm } from 'react-hook-form';
function GiftToyForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    //code here what to do with data
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="state"
        name="state"
        ref={register({ required: 'STATE REQUIRED' })}
      />
      <br></br>
      {errors.state && <p>{errors.state.message}</p>}
      <br></br>
      <input
        type="text"
        id="county"
        name="county"
        ref={register({ required: 'COUNTY REQUIRED' })}
      />
      <br></br>
      {errors.county && <p>{errors.county.message}</p>}
      <br></br>
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
