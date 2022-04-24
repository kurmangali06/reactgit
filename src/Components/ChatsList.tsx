
import { nanoid } from "nanoid";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Chat } from '../App'
import ButtonU from '@mui/material/Button';
import Input from '@mui/material/Input'
import { ListItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface ChatsListProps {
  chatList: Chat[]
  onAddChat: (chats: Chat) => void;
  onDeleteChat: (chat: string) => void
}

export const ChatsList: FC<ChatsListProps> = ({ chatList, onAddChat, onDeleteChat }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      onAddChat(
        {
          id: nanoid(),
          name
        });

      setName('')
    }
  };
  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => onDeleteChat(chat.name)}><DeleteIcon /></button>
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