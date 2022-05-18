import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AboutWithConnect } from "../pages/About";
import { Articles } from "../pages/Articles/Articles";
import { Chats } from "../pages/Chats/Chats";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile/Profile";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { ChatsList } from "./ChatsList/ChatsList";
import { Header } from "./Header/Header";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";



export const AppRouter: FC = () => (
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Header />} >
        <Route index element={<Home />} />
        <Route path="profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>} />

        <Route path="chats"  >
          <Route
            index
            element={
              <PrivateRoute>
                <ChatsList />
              </PrivateRoute>
            }
          />
          <Route
            path=":chatId"
            element={
              <PrivateRoute>
                <Chats />
              </PrivateRoute>
            }
          />
        </ Route>
        <Route path="about" element={<AboutWithConnect />} />
        <Route path="articles" element={<Articles />} />

        <Route path="signin"
          element={<PublicRoute  ><SignIn /></PublicRoute>} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path='*' element={<h2>404</h2>} />
    </Routes>

  </BrowserRouter >
);

