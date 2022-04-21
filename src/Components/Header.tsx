import React, { FC } from "react";
import { Outlet, NavLink } from "react-router-dom";

const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },
];

export const Header: FC = () => (
  <header>
    <ul>
      <li><NavLink to="/"
        style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>
        Home</NavLink></li>
      <li><NavLink to="/profile">profile</NavLink></li>
      <li><NavLink to="/chats">chats</NavLink></li>
    </ul>
    <main>
      <Outlet />
    </main>
  </header>
)