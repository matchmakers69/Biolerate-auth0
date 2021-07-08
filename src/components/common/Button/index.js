import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Btn } from './Button.styled';

export const BUTTON_COLOR = {
  PRIMARY: clsx('primaryButton'),
  LONG: clsx('longButton'),
};

export const BUTTON_SIZE = {
  LONG: clsx('longButton'),
};

const Button = ({ size = '', variant = '', text = '', onClick = () => {}, disabled = false }) => {
  return (
    <Btn disabled={disabled} onClick={onClick} className={clsx([variant], [size])}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

export default Button;
