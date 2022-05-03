import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AboutWithConnect } from "../pages/About";
import { Chats } from "../pages/Chats";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { ChatsList } from "./ChatsList";
import { Header } from "./Header";


export const AppRouter: FC = () => (
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
);

