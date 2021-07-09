import styled, { css } from 'styled-components';

const sharedStyles = css`
  border-radius: 100%;
  height: 5rem;
  width: 5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNavbarPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PanelUserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const PanelUserListItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const AvatarNoUser = styled.span`
  ${sharedStyles}
  background-color: ${({ theme: { colors } }) => colors.navyBlue};
  svg {
    width: 3rem;
    height: 3rem;
    fill: ${({ theme: { colors } }) => colors.pureWhite};
  }
`;

const AvatarUser = styled.span`
  ${sharedStyles}
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const Styled = {
  UserNavbarPanel,
  PanelUserList,
  PanelUserListItem,
  AvatarNoUser,
  AvatarUser,
};
