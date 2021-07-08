import styled, { css } from 'styled-components';
import BckIcon from 'assets/img/bck-login.jpg';

const sharedStyles = css`
  min-height: 100vh;
`;

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  background-color: red;
`;

const ColumnLoginForm = styled.div`
  ${sharedStyles}
  background-color: ${({ theme: { colors } }) => colors.pureWhite};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  flex: 0 0 55%;
  max-width: 55%;
`;

const LoginDetailsWrapper = styled.div`
  padding: 6rem 6rem 12rem 6rem;
  max-width: 80%;
  width: 100%;
`;

const ColumnLoginBck = styled.div`
  ${sharedStyles}
  background-image: url(${BckIcon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  filter: saturate(2);
  flex: 0 0 45%;
  max-width: 45%;
`;

export const Styled = {
  LoginPageWrapper,
  ColumnLoginForm,
  ColumnLoginBck,
  LoginDetailsWrapper,
};
