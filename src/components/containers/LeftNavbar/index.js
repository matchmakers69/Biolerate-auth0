import React from 'react';
import { Styled } from './LeftNavbar.styled';
import { constants } from '../../../constants';

const { PROFILE, FEED } = constants.route;

const LeftNavbar = () => {
  return (
    <Styled.NavBarContainer>
      <Styled.LogoWrapper>Galactic</Styled.LogoWrapper>
      <Styled.NavList>
        <Styled.NavListItem>
          <Styled.NavListLink exact to={PROFILE}>
            Profile
          </Styled.NavListLink>
        </Styled.NavListItem>

        <Styled.NavListItem>
          <Styled.NavListLink to={FEED}>Feed</Styled.NavListLink>
        </Styled.NavListItem>
      </Styled.NavList>
    </Styled.NavBarContainer>
  );
};

export default LeftNavbar;
