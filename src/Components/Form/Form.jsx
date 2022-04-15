import React, { useState } from 'react';
import { Button } from './Components/Button/Button';

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addMessage(value);
    setValue('');
  };

  return (
    <>
      <form className=" form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          className="input"
        />
        <Button disabled={!value} />
      </form>
    </>
  );
};
export default Form;
