import styled from 'styled-components';

const GeneralHeader = styled.header`
  margin-bottom: 2rem;
  .genaral-subtitle {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    color: ${({ theme: { colors } }) => colors.menuLightGrey};
  }
`;

// Form
const ProfileForm = styled.form`
  width: 100%;
  overflow: hidden;
`;

const FormColumnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme: { colors } }) => colors.borderGrey};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderGrey};
  margin-bottom: 2rem;
`;

const FormColumn = styled.div`
  max-width: 48%;
  flex: 0 0 48%;
`;

export const Styled = {
  GeneralHeader,
  ProfileForm,
  FormColumnsContainer,
  FormColumn,
};
