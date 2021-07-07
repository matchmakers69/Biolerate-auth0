import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from 'components/Auth/LoginForm';
import { constants } from '../../constants';

const { PROFILE } = constants.route;

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const {
    auth: { objAuthData },
  } = useSelector((state) => state);
  useEffect(() => {
    const checkAuth = () => {
      if (objAuthData) {
        setIsAuth(true);
      }
    };

    checkAuth();
  }, [objAuthData]);

  return isAuth ? (
    <Redirect to={PROFILE} />
  ) : (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
