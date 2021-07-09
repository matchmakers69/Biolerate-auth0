import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './HeaderContextMenu.styled';

const HeaderContextMenu = (props) => {
  return (
    <Styled.ContextWrapper>
      <Styled.ToggleContextButton />
    </Styled.ContextWrapper>
  );
};

HeaderContextMenu.propTypes = {};

export default HeaderContextMenu;
