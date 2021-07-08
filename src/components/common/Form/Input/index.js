import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './Input.styled';

export const InputText = ({ type = '', register, placeholder, isRequired = false, name, error = {} }) => {
  return (
    <Styled.InputWrapper>
      <Styled.InputField placeholder={placeholder} {...register(name, { required: isRequired })} type={type} />
      {error ? <Styled.ErrorMsg role="alert">{error.message}</Styled.ErrorMsg> : null}
    </Styled.InputWrapper>
  );
};

/**
 * Object @INPUT will be a mappaer, where keys are possible types for Input
 */
const INPUT = {
  text: (props) => <InputText type="text" {...props} />,
  email: (props) => <InputText type="email" {...props} />,
  password: (props) => <InputText type="password" {...props} />,
};

const Input = ({ type = '', register, placeholder, name, isRequired = false }) => {
  const InputComponent = INPUT[type];
  return (
    <>
      <InputComponent register={register} name={name} type={type} isRequired={isRequired} placeholder={placeholder} />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  register: PropTypes.instanceOf(Object).isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(Object),
};

export default Input;
