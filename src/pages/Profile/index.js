import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SeoWrapper from 'SeoWrapper';
import { Styled as StyledGrid } from 'styles/grid.styled';

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
      <StyledGrid.PageContent>
        <StyledGrid.Container>dd</StyledGrid.Container>
      </StyledGrid.PageContent>
    </SeoWrapper>
  );
};

Profile.propTypes = {};

export default Profile;
