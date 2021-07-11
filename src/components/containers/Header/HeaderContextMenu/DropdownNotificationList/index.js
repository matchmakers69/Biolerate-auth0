import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from 'styles/typography.styled';
import { Styled } from './DropdownNotificationList.styled';

const DropdownNotificationList = ({ loading = false, handleAllNotification = () => {}, data }) => {
  return (
    <Styled.DropdownList>
      <Styled.MenuHeader>
        <Styled.MenuHeaderDetails>
          <H3>Notification</H3>
          <Styled.ViewAllButton onClick={handleAllNotification}>View All</Styled.ViewAllButton>
        </Styled.MenuHeaderDetails>
      </Styled.MenuHeader>
      {loading ? (
        <span>Is loading...</span>
      ) : (
        <Styled.DropDownList>
          {data.map((singleNotification) => (
            <Styled.DropDownListItem key={singleNotification.id}>
              <Styled.DropDownListItemContent>
                <Styled.NotificationTilte className={singleNotification.read ? 'notificationRead' : ''}>
                  {singleNotification.title}
                </Styled.NotificationTilte>
              </Styled.DropDownListItemContent>
            </Styled.DropDownListItem>
          ))}
        </Styled.DropDownList>
      )}
    </Styled.DropdownList>
  );
};

DropdownNotificationList.propTypes = {
  loading: PropTypes.bool,
  handleAllNotification: PropTypes.func,
};

export default DropdownNotificationList;
