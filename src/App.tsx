import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatsList } from './Components/ChatsList';
import { Header } from './Components/Header';
import { AboutWithConnect } from './pages/About';
import { Chats } from './pages/Chats';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { defaultContext, ThemeContext } from "./utils/ThemeContext"

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (

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
              <Route index element={<ChatsList />} />
              <Route path=':chatId'
                element={
                  <Chats />} />
            </ Route >
            <Route path="/about" element={<AboutWithConnect />} />
          </Route>
          <Route path='*' element={<h2>404</h2>} />
        </Routes>

      </BrowserRouter >
    </ThemeContext.Provider>
  )
};

