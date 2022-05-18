import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, NavLink, Link } from "react-router-dom";
import { selectAuth } from "../../store/profile/selectors";
import { changeAuth } from "../../store/profile/slice";
import './Header.css'

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
  {
    id: 4,
    to: '/about',
    name: 'About',
  },
  {
    id: 5,
    to: '/articles',
    name: 'Acticles',
  },
];

export const Header: FC = () => {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <header>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}  >
        {navigate.map((link) => (
          <li key={link.id}><NavLink to={link.to}
            className="header"
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue', })}>
            {link.name}
          </NavLink></li>))}
      </ul>
      {auth ? <button onClick={() => dispatch(changeAuth(false))}>logout</button> : <Link to='/signin'>SingIn</Link>}
      <main>
        <Outlet />
      </main>
    </header >
  )

}