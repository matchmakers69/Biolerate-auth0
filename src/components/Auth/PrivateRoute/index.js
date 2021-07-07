import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { constants } from '../../../constants';

const { LOGIN } = constants.route;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    auth: { objAuthData },
  } = useSelector((state) => state);

  return (
    <Route {...rest} render={(props) => (objAuthData ? <Component {...rest} {...props} /> : <Redirect to={LOGIN} />)} />
  );
};

export default PrivateRoute;
