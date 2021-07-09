import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BellIIcon } from 'assets/icons/svg/bell.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/svg/cancel.svg';
import DropdownNotificationList from './DropdownNotificationList';
import { Styled } from './HeaderContextMenu.styled';

const HeaderContextMenu = () => {
  const [isDropDownVisible, setisDropDownVisible] = useState(false);

  const handleToggleDropDownVisible = () => {
    setisDropDownVisible(!isDropDownVisible);
  };
  return (
    <Styled.ContextWrapper>
      <Styled.ToggleContextButton onClick={handleToggleDropDownVisible}>
        {!isDropDownVisible ? <BellIIcon /> : <CloseIcon />}
      </Styled.ToggleContextButton>
      {isDropDownVisible && <DropdownNotificationList />}
    </Styled.ContextWrapper>
  );
};

HeaderContextMenu.propTypes = {};

export default HeaderContextMenu;
