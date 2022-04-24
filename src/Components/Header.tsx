import { ClassNames } from "@emotion/react";
import { link } from "fs";
import React, { FC } from "react";
import { Outlet, NavLink } from "react-router-dom";
import style from './Header.module.css'

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
    <ul className={style.list}>
      {navigate.map((link) => (
        <li key={link.id}><NavLink to={link.to}
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>
          {link.name}
        </NavLink></li>))}
    </ul>
    <main>
      <Outlet />
    </main>
  </header >
)