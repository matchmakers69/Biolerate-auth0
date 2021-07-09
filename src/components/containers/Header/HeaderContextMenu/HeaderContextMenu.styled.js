import styled from 'styled-components';

const ContextWrapper = styled.div`
  position: relative;
`;

const ToggleContextButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  height: 5rem;
  width: 5rem;
  overflow: hidden;
  cursor: pointer;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.pureWhite};
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.17);
  svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`;

export const Styled = {
  ContextWrapper,
  ToggleContextButton,
};
