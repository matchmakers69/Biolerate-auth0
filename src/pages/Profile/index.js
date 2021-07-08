import React, { useEffect } from 'react';
import { H1 } from 'styles/typography.styled';
import AccountTemplate from 'templates/AccountTemplate';
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
        <StyledGrid.Container>
          <H1>Account settings</H1>
          <AccountTemplate>
            <div className="wrapper">Lista</div>
          </AccountTemplate>
        </StyledGrid.Container>
      </StyledGrid.PageContent>
    </SeoWrapper>
  );
};

export default Profile;
