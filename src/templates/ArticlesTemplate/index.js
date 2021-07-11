import React from 'react';
import { Styled } from '../common.styled';
import SidebarNavigation from 'components/SidebarNavigation';
import { constants } from '../../constants';
import PropTypes from 'prop-types';

const { FEED_ARTICLE, FEED_INTERACTIONS } = constants.route;

const menuFeed = [
  {
    path: FEED_ARTICLE,
    name: 'Articles',
  },
  {
    path: FEED_INTERACTIONS,
    name: 'Interactions',
  },
];

const ArticlesTemplate = ({ children }) => {
  return (
    <Styled.PageSidebarwrapper className="template-wrapper">
      <Styled.NavigationSidebar className="nav-left">
        <SidebarNavigation menu={menuFeed} />
      </Styled.NavigationSidebar>
      <Styled.PageContent className="panel">{children}</Styled.PageContent>
    </Styled.PageSidebarwrapper>
  );
};

ArticlesTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArticlesTemplate;
