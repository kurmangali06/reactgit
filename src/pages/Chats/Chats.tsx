import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { ChatsList } from "../../Components/ChatsList/ChatsList";
import Form from "../../Components/Form/Form";
import { MessageList } from "../../Components/MessageList/MessageList";
import { WithClasses } from "../../HOC/WithClasses";
import { selectChatList, selectChats } from "../../store/chats/selectors";
import './Chats.css'

export const Chats: FC = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const MessageListWithClass = WithClasses(MessageList);

  const chats = useSelector(selectChats)
  const chatList = useSelector(selectChatList)

  /*useEffect(() => {
    if (
      chatId &&
      chats[chatId]?.length > 0 &&
      chats[chatId][chats[chatId].length - 1].author !== AUTHOR.BOT
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
*/

  if (!chatList.find(chat => chat.name === chatId)) {
    return <Navigate replace to='/chats' />

  }

  return (
    <div className="link" >
      <ChatsList />

      < MessageListWithClass messages={chatId ? chats[chatId] : []} classes='border' />
      <Form />

    </div>
  );
};
