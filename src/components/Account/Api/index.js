import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Styled as FormStyled } from 'components/common/Form/Input/Input.styled';
import Input from 'components/common/Form/Input';
import { Styled as StyledGrid } from 'styles/grid.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { H2 } from 'styles/typography.styled';
import { updateAccessToken } from 'store/auth/actions';
import { tokenSchema } from 'libs/yup/validation/tokenSchema';
import { useSelector, useDispatch } from 'react-redux';

const Api = (props) => {
  const [copied, setCopied] = useState(false);
  const {
    auth: { objAuthData },
  } = useSelector((state) => state);
  const { accessToken } = objAuthData;

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(tokenSchema),
    defaultValues: {
      accessToken,
    },
  });

  const handleGenerateAnotherToken = (data) => {
    dispatch(updateAccessToken(data));
  };

  const handleCopyToClipboard = () => {
    setCopied(true);
  };

  return (
    <StyledGrid.SubPageContent>
      <H2>Access Token</H2>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(handleGenerateAnotherToken)}>
        <div className="form-group">
          <FormStyled.InputLabel htmlFor="accessToken">Access Token</FormStyled.InputLabel>
          <Input
            id="accessToken"
            type="text"
            name="accessToken"
            register={register}
            isRequired
            placeholder="Access token"
            error={errors.accessToken}
          />
        </div>
        <CopyToClipboard text={accessToken} onCopy={() => handleCopyToClipboard()}>
          <button type="button">Copy to clipboard</button>
        </CopyToClipboard>
        <button type="submit">Generate another</button>
      </form>

      <section className="section">{copied ? <span style={{ color: 'red' }}>Token copied</span> : null}</section>
    </StyledGrid.SubPageContent>
  );
};

Api.propTypes = {};

export default Api;
