import React from 'react'
import { FC } from 'react'
import { useSelector } from 'react-redux';

import { Navigate, Outlet, RouteProps } from 'react-router-dom'
import { selectAuth } from 'src/store/profile/selectors';

interface IPublicRoute extends RouteProps {
  restricted?: boolean;
  children?: JSX.Element;
}

export const PublicRoute: FC<IPublicRoute> = ({ restricted = true,
  children,
}) => {
  const isAuth = useSelector(selectAuth);

  if (isAuth && restricted) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};