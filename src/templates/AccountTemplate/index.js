import React from 'react';
import { Styled } from '../common.styled';
import SidebarNavigation from 'components/SidebarNavigation';
import { constants } from '../../constants';
import PropTypes from 'prop-types';

const { PROFILE_GENERAL, PROFILE_API } = constants.route;

const menuProfile = [
  {
    path: PROFILE_GENERAL,
    name: 'General',
  },
  {
    path: PROFILE_API,
    name: 'Api',
  },
];

const AccountTemplate = ({ children }) => {
  return (
    <Styled.PageSidebarwrapper className="template-wrapper">
      <Styled.NavigationSidebar className="nav-left">
        <SidebarNavigation menu={menuProfile} />
      </Styled.NavigationSidebar>
      <Styled.PageContent className="panel">{children}</Styled.PageContent>
    </Styled.PageSidebarwrapper>
  );
};

AccountTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccountTemplate;
