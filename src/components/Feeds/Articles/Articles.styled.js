import styled from 'styled-components';

export const ArticleList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;

    margin-bottom: 15px;
    background-color: ${({ theme: { colors } }) => colors.pureWhite};
    box-shadow: 0px 4px 16px rgba(82, 94, 115, 0.08);
    border-radius: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
