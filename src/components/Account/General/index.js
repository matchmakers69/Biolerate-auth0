import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from 'styles/typography.styled';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Styled as FormStyled } from 'components/common/Form/Input/Input.styled';
import Input from 'components/common/Form/Input';
import Button, { BUTTON_COLOR } from 'components/common/Button';
import { Styled } from './General.styled';
import { updateUserProfile } from 'store/auth/actions';
import { Styled as StyledGrid } from 'styles/grid.styled';

const General = (props) => {
  const dispatch = useDispatch();
  const {
    auth: { objAuthUser },
  } = useSelector((state) => state);
  const { nickname, name } = objAuthUser;

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(loginSchema),
    defaultValues: {
      nickname,
      name,
    },
  });

  const handleUpdateDetailsSubmit = (data) => {
    dispatch(updateUserProfile(data));
  };

  return (
    <StyledGrid.SubPageContent>
      <Styled.GeneralHeader>
        <H2>General</H2>
        <p className="genaral-subtitle">Click field boxes to edit and then save your changes</p>
      </Styled.GeneralHeader>
      <Styled.ProfileForm noValidate autoComplete="off" onSubmit={handleSubmit(handleUpdateDetailsSubmit)}>
        <Styled.FormColumnsContainer>
          <Styled.FormColumn>
            <div className="form-group">
              <FormStyled.InputLabel htmlFor="nickname">Nickname</FormStyled.InputLabel>
              <Input
                id="nickname"
                type="text"
                name="nickname"
                register={register}
                isRequired
                placeholder="Your nickname"
                error={errors.nickname}
              />
            </div>
          </Styled.FormColumn>
          <Styled.FormColumn>
            <div className="form-group">
              <FormStyled.InputLabel htmlFor="name">Email</FormStyled.InputLabel>
              <Input
                id="name"
                type="email"
                name="name"
                register={register}
                isRequired
                placeholder="Your email"
                error={errors.name}
              />
            </div>
          </Styled.FormColumn>
        </Styled.FormColumnsContainer>
        <Button type="submit" variant={BUTTON_COLOR.PRIMARY} text="Save changes" />
      </Styled.ProfileForm>
    </StyledGrid.SubPageContent>
  );
};

General.propTypes = {};

export default General;
