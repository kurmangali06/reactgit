import React, { FC } from 'react';
import css from './MessageList.module.css'


interface Message {
  id: string
  author: string,
  value: string
}

interface MessageListProps {
  messages: Message[]
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <ul className={css.first} >
    {messages.map((message, id) => (
      <li key={id}>
        {message.author}: {message.value}
      </li>
    ))}
  </ul>
);
