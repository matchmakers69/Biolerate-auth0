import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAuthCredentials } from 'store/auth/actions';
import { auth0Client } from 'config/auth0';
import { loginSchema } from 'libs/yup/validation/loginFormValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { Styled } from 'components/common/Form/Input/Input.styled';
import { ErrorMsg } from './LoginForm.styled';
import Input from 'components/common/Form/Input';
import Button, { BUTTON_COLOR, BUTTON_SIZE } from 'components/common/Button';
import { constants } from '../../../constants';

const { PROFILE } = constants.route;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [objError, setObjError] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const login = (username, password) => {
    setLoading(true);
    auth0Client.client.login(
      {
        realm: 'Username-Password-Auth-Test',
        username,
        password,
      },
      (err, authResult) => {
        if (err) {
          console.log(err);
          setLoading(false);
          setObjError(err);
          return;
        }
        if (authResult) {
          setLoading(false);
          dispatch(setAuthCredentials(authResult));
          history.push(PROFILE);
        }
      },
    );
  };

  const handleLoginFormSubmit = (data) => {
    const { email, password } = data;

    // Auth0 login integration
    login(email, password);

    setTimeout(() => {
      reset({
        email: '',
        password: '',
      });
    }, 300);
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  const errorMessage = objError?.description;
  return (
    <>
      <form autoComplete="false" noValidate onSubmit={handleSubmit(handleLoginFormSubmit)}>
        <div className="form-group">
          <Styled.InputLabel htmlFor="email">Email</Styled.InputLabel>
          <Input
            id="email"
            type="email"
            name="email"
            register={register}
            isRequired
            placeholder="Enter your email"
            error={errors.email}
          />
        </div>
        <div className="form-group">
          <Styled.InputLabel htmlFor="password">Password</Styled.InputLabel>
          <Input
            id="password"
            type="password"
            name="password"
            register={register}
            isRequired
            placeholder="*************"
            error={errors.password}
          />
        </div>
        <div className="form-group">
          <Button
            size={BUTTON_SIZE.LONG}
            variant={BUTTON_COLOR.PRIMARY}
            text="Log in"
            disabled={!isValid}
            type="submit"
          />
        </div>
        <ErrorMsg>{errorMessage}</ErrorMsg>
      </form>
    </>
  );
};

export default LoginForm;
