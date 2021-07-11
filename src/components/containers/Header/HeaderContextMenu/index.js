import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BellIIcon } from 'assets/icons/svg/bell.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/svg/cancel.svg';
import DropdownNotificationList from './DropdownNotificationList';
import { fetchNotification } from 'api/notification';
import { Styled } from './HeaderContextMenu.styled';

const INITIAL_NOTIFICATION_QUANTITY = 10;

const HeaderContextMenu = () => {
  const [isDropDownVisible, setisDropDownVisible] = useState(false);
  const [isViewAll, setIsViewAll] = useState(false);
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchNotification = async () => {
    try {
      const response = await fetchNotification();
      const sortedNotifications = [...response]
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, INITIAL_NOTIFICATION_QUANTITY);

      setNotification(!isDropDownVisible ? sortedNotifications : response);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggleDropDownVisible = () => {
    setisDropDownVisible(!isDropDownVisible);
    if (!isDropDownVisible) {
      handleFetchNotification();
    }
  };

  const handleToogleViewAllNotification = () => {
    setIsViewAll(!isViewAll);
    if (!isViewAll) {
      handleFetchNotification();
    }
  };

  return (
    <Styled.ContextWrapper>
      <Styled.ToggleContextButton onClick={handleToggleDropDownVisible}>
        {!isDropDownVisible ? <BellIIcon /> : <CloseIcon />}
      </Styled.ToggleContextButton>
      {isDropDownVisible && (
        <DropdownNotificationList
          data={notification}
          handleAllNotification={handleToogleViewAllNotification}
          loading={loading}
        />
      )}
    </Styled.ContextWrapper>
  );
};

HeaderContextMenu.propTypes = {};

export default HeaderContextMenu;
