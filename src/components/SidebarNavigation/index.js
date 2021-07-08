import React from 'react';
import PropTypes from 'prop-types';

import { Styled } from './SidebarNavigation.styled';

const SidebarNavigation = ({ menu }) => {
  return (
    <Styled.SidebarList>
      {menu.map((menuItem) => (
        <Styled.SidebarListItem exact key={menuItem.name}>
          <Styled.SidebarLink to={menuItem.path}>{menuItem.name}</Styled.SidebarLink>
        </Styled.SidebarListItem>
      ))}
    </Styled.SidebarList>
  );
};

SidebarNavigation.propTypes = {
  menu: PropTypes.instanceOf(Array),
};

export default SidebarNavigation;
