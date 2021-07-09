import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xlarge};
  margin: 0 0 3rem 0;
  line-height: 1.2;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.navyBlue};
`;

export const H2 = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.navyBlue};
`;
