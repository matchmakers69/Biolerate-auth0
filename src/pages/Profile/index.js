import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Profile = () => {
  useEffect(() => {
    const checkAuth = () => {};

    checkAuth();
  }, []);
  return <div>This is Profile page</div>;
};

Profile.propTypes = {};

export default Profile;
