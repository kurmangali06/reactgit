import React, { FC, useState } from 'react';

import Input from '@mui/material/Input'
import { useDispatch } from 'react-redux';
import { addMessageWithReplay } from '../../store/chats/action';
import { useParams } from 'react-router-dom';
import { AUTHOR } from '../../constants';
import "./Form.css"



export const Form: FC = () => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();

  const dispatch = useDispatch();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId) {
      dispatch(addMessageWithReplay(chatId, { text: value, author: AUTHOR.USER }));

    }

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
      <button disabled={!value} >отправить</button>
    </form>
  );
};
export default Form;
