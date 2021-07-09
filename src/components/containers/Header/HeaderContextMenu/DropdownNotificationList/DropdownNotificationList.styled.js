import styled from 'styled-components';

const DropdownList = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  background-color: ${({ theme: { colors } }) => colors.pureWhite};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  min-width: 280px;
  max-width: 320px;
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
  padding: 15px 12px;
  margin: 0;
  list-style: none;
`;

export const Styled = {
  DropdownList,
  MenuHeader,
  MenuHeaderDetails,
  DropDownList,
};
