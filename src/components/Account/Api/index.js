import React from 'react';
import PropTypes from 'prop-types';
import { Styled as FormStyled } from 'components/common/Form/Input/Input.styled';
import Input from 'components/common/Form/Input';
import Button, { BUTTON_COLOR } from 'components/common/Button';
import { Styled as StyledGrid } from 'styles/grid.styled';
import { useForm } from 'react-hook-form';
import { H2 } from 'styles/typography.styled';
import { useSelector } from 'react-redux';

const Api = (props) => {
  const {
    auth: { objAuthData },
  } = useSelector((state) => state);
  const { accessToken } = objAuthData;

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(profilSchema),
    defaultValues: {
      accessToken,
    },
  });

  const handleGenerateAnotherToken = (data) => {
    console.log(data);
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
            // isRequired
            placeholder="Access token"
            // error={errors.nickname}
          />
        </div>
      </form>
    </StyledGrid.SubPageContent>
  );
};

Api.propTypes = {};

export default Api;
