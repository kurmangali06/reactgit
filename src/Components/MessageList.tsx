import React, { FC } from 'react';
import './MessageList.module.css'


interface Message {
  id: string
  author: string,
  text: string
}

interface MessageListProps {
  messages: Message[]
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <ul className='first' >
    {messages.map((message, id) => (
      <li key={id}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);
