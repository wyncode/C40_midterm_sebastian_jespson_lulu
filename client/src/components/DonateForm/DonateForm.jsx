import React from 'react';
import { useForm } from 'react-hook-form';

function DonateForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    //code here what to do with data
  };
  return (
    <div className="donateForm">
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
    </div>
  );
}

export default DonateForm;
