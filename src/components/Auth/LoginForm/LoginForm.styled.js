import styled from 'styled-components';

export const ErrorMsg = styled.p`
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.errorRed};
  margin: 5px 0 0 0;
`;
