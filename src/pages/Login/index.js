import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SeoWrapper from 'SeoWrapper';
import { Styled } from './/Login.styled';
import LoginForm from 'components/Auth/LoginForm';
import { updateUI } from 'store/ui/actions';
import { constants } from '../../constants';
import { H1 } from 'styles/typography.styled';

const { PROFILE } = constants.route;

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const {
    auth: { objAuthData },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = () => {
      if (objAuthData) {
        setIsAuth(true);
      }
    };
    checkAuth();
  }, [objAuthData]);

  useEffect(() => {
    /**
     * @updateUI is coming from global store from action creator to display parts of ui we want for a page eg background image
     */
    dispatch(
      updateUI({
        displayHeader: false,
        displayFooter: false,
      }),
    );

    return () => {
      dispatch(
        updateUI({
          displayHeader: true,
          displayFooter: false,
        }),
      );
    };
  }, [dispatch]);

  return isAuth ? (
    <Redirect to={PROFILE} />
  ) : (
    <SeoWrapper bodyClass="page--login" seoProps={{ title: 'Login', description: 'Biorelate login page description' }}>
      <Styled.LoginPageWrapper>
        <Styled.ColumnLoginForm>
          <Styled.LoginDetailsWrapper>
            <H1>Log in</H1>
            <LoginForm />
          </Styled.LoginDetailsWrapper>
        </Styled.ColumnLoginForm>
        <Styled.ColumnLoginBck />
      </Styled.LoginPageWrapper>
    </SeoWrapper>
  );
};

export default Login;
