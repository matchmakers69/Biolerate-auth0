import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { H1 } from 'styles/typography.styled';
import AccountTemplate from 'templates/AccountTemplate';
import RouteWithSubRoutes from 'utils/RouteWithSubRoutes';
import SeoWrapper from 'SeoWrapper';
import { constants } from '../../constants';
import { profileRoutes } from 'config/routesMapper';
import { Styled as StyledGrid } from 'styles/grid.styled';

const { PROFILE, PROFILE_GENERAL } = constants.route;

const Profile = () => {
  return (
    <SeoWrapper
      bodyClass="page--profile"
      seoProps={{ title: 'User profile', description: 'Biorelate profile page description' }}
    >
      <StyledGrid.PageContent>
        <StyledGrid.Container>
          <H1>Account settings</H1>
          <AccountTemplate>
            <div className="wrapper">
              <Switch>
                <Redirect from={PROFILE} exact to={PROFILE_GENERAL} />

                {profileRoutes.map((route, i) => (
                  // Not the greatest practise to pass index as a key  ;)
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </div>
          </AccountTemplate>
        </StyledGrid.Container>
      </StyledGrid.PageContent>
    </SeoWrapper>
  );
};

export default Profile;
