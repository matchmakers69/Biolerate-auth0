import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SeoWrapper from 'SeoWrapper';

const Profile = () => {
  useEffect(() => {
    const checkAuth = () => {};

    checkAuth();
  }, []);
  return (
    <SeoWrapper
      bodyClass="page--profile"
      seoProps={{ title: 'User profile', description: 'Biorelate profile page description' }}
    >
      This is Profile page
    </SeoWrapper>
  );
};

Profile.propTypes = {};

export default Profile;
