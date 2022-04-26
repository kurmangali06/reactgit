import { nanoid } from 'nanoid';
import React, { FC, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatsList } from './Components/ChatsList';
import { Header } from './Components/Header';
import { AUTHOR } from './constants';
import { Chats } from './pages/Chats';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { store } from './store';
import { defaultContext, ThemeContext } from "./utils/ThemeContext"

export interface Chat {
  id: string,
  name: string
}

const initialMessages: Messages = {
  default: [
    {
      id: '1',
      author: AUTHOR.USER,
      value: 'hello my friend '
    }]
}
export interface Message {
  id: string
  author: string,
  value: string,
}
export interface Messages {
  [key: string]: Message[];
}

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>(initialMessages);
  const [theme, setTheme] = useState(defaultContext.theme)

  const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages).length]
  );

  const onAddChat = (chat: Chat) => {
    if (!messages[chat.name]) {
      setMessages({
        ...messages,
        [chat.name]: []
      })
    }

  }

  const onDeleteChat = (chatName: string) => {
    const newMessages = { ...messages };
    delete newMessages[chatName];

    setMessages({
      ...newMessages,
    })
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Provider store={store} >
      <ThemeContext.Provider value={
        {
          theme,
          toggleTheme,
        }
      }>
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<Header />} >
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chats"  >
                <Route index element={<ChatsList chatList={chatList} onAddChat={onAddChat} onDeleteChat={onDeleteChat} />} />
                <Route path=':chatId' element={<Chats
                  messages={messages} setMessages={setMessages}
                  chatList={chatList} onAddChat={onAddChat}
                  onDeleteChat={onDeleteChat} />} />
              </ Route >
            </Route>
            <Route path='*' element={<h2>404</h2>} />
          </Routes>

        </BrowserRouter >
      </ThemeContext.Provider>
    </Provider>
  )
};

export default App;
