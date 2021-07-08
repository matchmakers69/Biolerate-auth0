import styled from 'styled-components';

const PageSidebarwrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavigationSidebar = styled.aside`
  max-width: 35%;
  flex: 0 0 35%;
`;

const PageContent = styled.div`
  max-width: 60%;
  flex: 0 0 60%;
`;

export const Styled = {
  PageSidebarwrapper,
  NavigationSidebar,
  PageContent,
};
