import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.span`
  display: block;
  font-weight: 700;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.navyBlue};
  margin-right: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavListItem = styled.li`
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;

const NavListLink = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.menuGrey};
  text-decoration: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 15px 0;
  &.active {
    color: ${({ theme: { colors } }) => colors.menuLightGrey};
  }
`;

export const Styled = {
  NavBarContainer,
  LogoWrapper,
  NavList,
  NavListItem,
  NavListLink,
};
