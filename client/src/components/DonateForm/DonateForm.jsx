import React from 'react';
import './DonateForm.css';
import useForm from 'react-hook-form';

export default function DonateForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" ref={register} />
    </form>
  );
}
