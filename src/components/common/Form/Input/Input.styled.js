import styled, { css } from 'styled-components';

const sharedStyles = css`
  background-color: ${({ theme: { colors } }) => colors.pureWhite};
  border-radius: 4px;
  height: 4.5rem;
  border: 1px solid ${({ theme: { colors } }) => colors.borderGrey};
  padding: 10px;
  color: ${({ theme: { colors } }) => colors.menuGrey};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;

const InputLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.navyBlue};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
`;

const InputField = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}

  &:focus {
    border: 2px solid ${({ theme: { colors } }) => colors.mediumBlue};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    box-shadow: 0px 0px 2px 0px rgba(69, 43, 120, 0.5);
    outline: transparent;
    border-radius: 4px;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme: { colors } }) => colors.menuGrey};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  }
  :-ms-input-placeholder {
    color: ${({ theme: { colors } }) => colors.menuGrey};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  }
`;

const InputFieldTextarea = styled.textarea`
  display: block;
  min-height: 100px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  color: ${({ theme: { colors } }) => colors.menuGrey};
  width: 100%;
  ${sharedStyles}

  &:focus {
    border: 2px solid ${({ theme: { colors } }) => colors.mediumBlue};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    box-shadow: 0px 0px 2px 0px rgba(69, 43, 120, 0.5);
    outline: transparent;
    border-radius: 4px;
  }
`;

const ErrorMsg = styled.p`
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.errorRed};
  margin: 5px 0 0 0;
`;

export const Styled = {
  InputWrapper,
  InputField,
  InputFieldTextarea,
  ErrorMsg,
  InputLabel,
};
