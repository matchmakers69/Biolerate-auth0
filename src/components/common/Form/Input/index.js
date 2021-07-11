import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './Input.styled';

export const InputHookForm = ({ type = '', register, placeholder, isRequired = false, name, error = {} }) => {
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
  text: (props) => <InputHookForm type="text" {...props} />,
  email: (props) => <InputHookForm type="email" {...props} />,
  password: (props) => <InputHookForm type="password" {...props} />,
};

const Input = ({ type = '', register, placeholder, name, isRequired = false, error = {} }) => {
  const InputComponent = INPUT[type];
  return (
    <>
      <InputComponent
        register={register}
        name={name}
        type={type}
        isRequired={isRequired}
        placeholder={placeholder}
        error={error}
      />
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
