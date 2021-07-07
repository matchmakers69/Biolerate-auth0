import styled from 'styled-components';
import { device } from 'styles/breakpoints';

const MainContent = styled.div`
  flex: 1;
  padding-top: 15rem;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;

  @media ${device.tablet} {
    max-width: 845px;
  }

  @media ${device.laptopL} {
    max-width: 1140px;
  }
`;

export const Styled = {
  MainContent,
  Container,
};
