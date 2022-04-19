import React, { useEffect, useState } from 'react';
import './App.css';
import { MessageList } from './Components/MessageList';
import Form from './Components/Form/Form';
import { AUTHOR } from './constants';

export const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: AUTHOR.BOT,
            value: "HELLO I'm BOT!! ",
          },
        ]);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = (value) => {
    setMessages([
      ...messages,
      {
        author: AUTHOR.USER,
        value,
      },
    ]);
  };
  return (
    <div className="container">
      <Form className="form" addMessage={addMessage} />
      <MessageList messages={messages} />
    </div>
  );
};

export default App;
