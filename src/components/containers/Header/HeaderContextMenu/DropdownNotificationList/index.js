import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from 'styles/typography.styled';
import { Styled } from './DropdownNotificationList.styled';

const DropdownNotificationList = (props) => {
  return (
    <Styled.DropdownList>
      <Styled.MenuHeader>
        <Styled.MenuHeaderDetails>
          <H3>Notification</H3>
        </Styled.MenuHeaderDetails>
      </Styled.MenuHeader>
      <Styled.DropDownList>vffse</Styled.DropDownList>
    </Styled.DropdownList>
  );
};

DropdownNotificationList.propTypes = {};

export default DropdownNotificationList;
