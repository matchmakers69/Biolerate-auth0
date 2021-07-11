import React, { lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { H1 } from 'styles/typography.styled';
import ArticlesTemplate from 'templates/ArticlesTemplate';
import RouteWithSubRoutes from 'utils/RouteWithSubRoutes';
import SeoWrapper from 'SeoWrapper';
import { constants } from '../../constants';
import { Styled as StyledGrid } from 'styles/grid.styled';
import { feedRoutes } from 'config/routesMapper';
const { FEED, FEED_ARTICLE } = constants.route;

const Feed = () => {
  return (
    <SeoWrapper
      bodyClass="page--feed"
      seoProps={{ title: 'User feed', description: 'Biorelate feed page description' }}
    >
      <StyledGrid.PageContent>
        <StyledGrid.Container>
          <H1>My Feed</H1>
          <ArticlesTemplate>
            <div className="wrapper">
              <Switch>
                <Redirect from={FEED} exact to={FEED_ARTICLE} />

                {feedRoutes.map((route, i) => (
                  // Not the greatest practise to pass index as a key  ;)
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </div>
          </ArticlesTemplate>
        </StyledGrid.Container>
      </StyledGrid.PageContent>
    </SeoWrapper>
  );
};

export default Feed;
