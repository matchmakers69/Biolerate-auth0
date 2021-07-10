import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from 'styles/typography.styled';
import { Styled } from './DropdownNotificationList.styled';

const DropdownNotificationList = ({ loading = false }) => {
  return (
    <Styled.DropdownList>
      <Styled.MenuHeader>
        <Styled.MenuHeaderDetails>
          <H3>Notification</H3>
        </Styled.MenuHeaderDetails>
      </Styled.MenuHeader>
      {loading ? <span>Is loading...</span> : <Styled.DropDownList>vffse</Styled.DropDownList>}
    </Styled.DropdownList>
  );
};

DropdownNotificationList.propTypes = {
  loading: PropTypes.bool,
};

export default DropdownNotificationList;
