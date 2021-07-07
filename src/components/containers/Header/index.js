import React from 'react';
import { Styled } from './Header.styled';
import { Styled as StyledGrid } from 'styles/grid.styled';
import UserNavbar from 'components/containers/UserNavbar';
import LeftNavbar from 'components/containers/LeftNavbar';

const Header = () => {
  return (
    <Styled.TopHeader>
      <StyledGrid.Container>
        <Styled.HeaderContainer>
          <Styled.HeaderNavBar>
            <LeftNavbar />
            <UserNavbar />
          </Styled.HeaderNavBar>
        </Styled.HeaderContainer>
      </StyledGrid.Container>
    </Styled.TopHeader>
  );
};

export default Header;
