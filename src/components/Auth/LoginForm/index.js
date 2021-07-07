import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAuthCredentials } from 'store/auth/actions';
import { auth0Client } from 'config/auth0';
import PropTypes from 'prop-types';
import { constants } from '../../../constants';

const { PROFILE } = constants.route;

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const handleFormLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

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

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginDetails;
    login(email, password);
  };
  const { email, password } = loginDetails;
  if (loading) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <form autoComplete="false" noValidate onSubmit={handleLoginFormSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={handleFormLoginChange}
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={handleFormLoginChange}
            placeholder="*****"
            type="password"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
