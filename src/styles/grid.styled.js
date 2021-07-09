import styled from 'styled-components';
import { device } from 'styles/breakpoints';

const MainContentFull = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const MainContent = styled.div`
  flex: 1;
  padding-top: 10rem;
`;

const PageContent = styled.div`
  padding-top: 4rem;
`;

const SubPageContent = styled.div``;

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
  MainContentFull,
  SubPageContent,
};
