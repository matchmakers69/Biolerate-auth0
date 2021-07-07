import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Btn } from './Button.styled';

export const BUTTON_TYPE = {
  PRIMARY: clsx('primaryButton'),
};

const Button = ({ variant = '', text = '', onClick }) => {
  return (
    <Btn onClick={onClick} className={clsx([variant])}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
