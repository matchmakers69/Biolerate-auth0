import styled from 'styled-components';

const DropdownList = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  background-color: ${({ theme: { colors } }) => colors.pureWhite};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  min-width: 350px;
  max-width: 480px;
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
`;

const MenuHeader = styled.header`
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderGrey};
`;

const MenuHeaderDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 12px;
`;

const DropDownList = styled.ul`
  padding: 12px;
  margin: 0;
  list-style: none;
`;

const DropDownListItem = styled.li`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderGrey};
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const DropDownListItemContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 12px 0;
`;

const NotificationTilte = styled.span`
  display: block;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.navyBlue};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  margin-bottom: 5px;
  &.notificationRead {
    text-decoration: line-through;
    opacity: 0.6;
  }
`;

const ViewAllButton = styled.button`
  background-color: transparent;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  outline: none;
  border: none;
  color: ${({ theme: { colors } }) => colors.mediumBlue};
  cursor: pointer;
  font-weight: 700;
`;

export const Styled = {
  DropdownList,
  MenuHeader,
  MenuHeaderDetails,
  DropDownList,
  ViewAllButton,
  DropDownListItem,
  DropDownListItemContent,
  NotificationTilte,
};
