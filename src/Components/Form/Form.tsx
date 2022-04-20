import React, { FC, useState } from 'react';
import { Button } from './Components/Button/Button';
import Input from '@mui/material/Input'


interface FormProps {
  addMessage: (a: string) => void,

}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMessage(value);
    setValue('');
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <Input
        placeholder="Введите текст"
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        className="input"
        data-testid="unput-element"
      />
      <Button disabled={!value} />
    </form>
  );
};
export default Form;
