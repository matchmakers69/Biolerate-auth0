import styled from 'styled-components';

const TopHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.pureWhite};
`;

const HeaderContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderGrey};
  height: 10rem;
`;

const HeaderNavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Styled = {
  TopHeader,
  HeaderContainer,
  HeaderNavBar,
};
