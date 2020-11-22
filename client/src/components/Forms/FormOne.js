import React from 'react';
import { useForm } from 'react-hook-form';

function FormOne() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    //code here what to do with data
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

export default FormOne;
