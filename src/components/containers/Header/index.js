import React from 'react';
import { Styled } from './Header.styled';
import { useSelector } from 'react-redux';
import { Styled as StyledGrid } from 'styles/grid.styled';
import UserNavbar from 'components/containers/UserNavbar';
import LeftNavbar from 'components/containers/LeftNavbar';

const Header = () => {
  const {
    ui: { displayHeader },
  } = useSelector((state) => state);

  if (displayHeader)
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

  return null;
};

export default Header;
