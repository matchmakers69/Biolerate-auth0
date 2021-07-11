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

export const LoadMoreWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  .load-more-button {
    border: none;
    cursor: pointer;
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme: { colors } }) => colors.pureWhite};
    background-color: ${({ theme: { colors } }) => colors.navyBlue};
    padding: 0 22px;
    font-weight: 600;
  }
`;
