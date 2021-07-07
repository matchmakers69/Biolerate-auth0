import styled from 'styled-components';

export const Btn = styled.button`
  cursor: pointer;
  border: none;
  min-height: 55px;
  min-width: 110px;
  padding: 0 30px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { colors } }) => colors.pureWhite};
  font-weight: 600;
  &.primaryButton {
    background-color: ${({ theme: { colors } }) => colors.mediumBlue};
  }
`;
