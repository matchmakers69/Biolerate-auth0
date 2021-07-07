import styled from 'styled-components';
import { device } from 'styles/breakpoints';

const MainContent = styled.div`
  flex: 1;
  padding-top: 10rem;
`;

const PageContent = styled.div`
  padding-top: 4rem;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 6.25rem;
  margin-right: auto;
  margin-left: auto;

  @media ${device.tablet} {
    max-width: 845px;
  }

  @media ${device.laptopL} {
    max-width: 1220px;
  }
`;

export const Styled = {
  MainContent,
  Container,
  PageContent,
};
