import React, { FC, useCallback, useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import { MessageList } from './Components/MessageList';
import Form from './Components/Form/Form';
import { AUTHOR } from './constants';
import style from './App.module.css'

interface Message {
  id: string
  author: string,
  value: string,
}

export const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            id: nanoid(),
            author: AUTHOR.BOT,
            value: `HELLO I'm BOT!! `,
          },
        ]);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = useCallback((value: string) => {
    setMessages((prevMessage) => [
      ...prevMessage,
      {
        id: nanoid(),
        author: AUTHOR.USER,
        value,
      },
    ]);
  }, []);
  return (
    <div className={style.form}>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />

    </div>
  );
};

export default App;
