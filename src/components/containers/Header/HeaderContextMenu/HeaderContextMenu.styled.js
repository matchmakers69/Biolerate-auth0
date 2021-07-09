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
  border: none;
  background-color: ${({ theme: { colors } }) => colors.pureWhite};
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.37);
`;

export const Styled = {
  ContextWrapper,
  ToggleContextButton,
};
