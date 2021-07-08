import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SidebarListItem = styled.li`
  margin-bottom: 10px;
  min-height: 4rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SidebarLink = styled(NavLink)`
  height: 100%;
  padding: 15px 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.menuGrey};
  font-weight: 600;
  &.active {
    border-radius: 30px;
    color: ${({ theme: { colors } }) => colors.mediumBlue};
    background-color: ${({ theme: { colors } }) => colors.lightBlue};
  }
`;

export const Styled = {
  SidebarList,
  SidebarListItem,
  SidebarLink,
};
