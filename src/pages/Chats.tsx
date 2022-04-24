import { nanoid } from "nanoid";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Chat, Message, Messages } from "../App";
import { ChatsList } from "../Components/ChatsList";
import Form from "../Components/Form/Form";
import { MessageList } from "../Components/MessageList";
import { AUTHOR } from "../constants";
import style from './Chats.module.css'

interface ChatProps {
  messages: Messages,
  setMessages: React.Dispatch<React.SetStateAction<Messages>>
  chatList: Chat[]
  onAddChat: (chats: Chat) => void
  onDeleteChat: (chatName: string) => void
}


export const Chats: FC<ChatProps> = ({
  chatList, onAddChat, messages, setMessages, onDeleteChat }) => {
  const { chatId } = useParams();
  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              author: AUTHOR.BOT,
              value: `HELLO I'm BOT!! `,
            },
          ],

        });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = (value: string) => {
    if (chatId) {
      setMessages((prevMessage) => ({
        ...prevMessage,
        [chatId]: [
          ...prevMessage[chatId],
          {
            id: nanoid(),
            author: AUTHOR.USER,
            value,
          },
        ],
      }));
    }
  }

  if (!chatList.find(chat => chat.name === chatId)) {
    return <Navigate replace to='/chats' />

  }

  return (
    <div className={style.container} >
      <ChatsList chatList={chatList} onAddChat={onAddChat} onDeleteChat={onDeleteChat} />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form addMessage={addMessage} />

    </div>
  );
};
