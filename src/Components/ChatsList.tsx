import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import ButtonU from '@mui/material/Button';
import Input from '@mui/material/Input'
import { ListItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../store/chats/action";
import { selectChatList } from "../store/chats/selectors";
import './ChatsList.css'


export const ChatsList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(selectChatList)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      dispatch(addChat(name));
      setName('')
    }
  };
  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <ListItem key={chat.id} className='list'>
            <Link className="link" to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => dispatch(deleteChat(chat.name))}><DeleteIcon /></button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={name}
          onChange={(e) => setName(e.target.value)} />

        <ButtonU
          variant="contained" type="submit">add Chat
        </ButtonU>
      </form>
    </>
  )
}