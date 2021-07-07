import React from 'react';
import { Styled } from './UserNavbar.styled';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { constants } from '../../../constants';
import { ReactComponent as UserIcon } from 'assets/icons/svg/user.svg';
import Button, { BUTTON_TYPE } from 'components/common/Button';

const { LOGIN } = constants.route;

const UserNavbar = () => {
  const {
    auth: { objAuthUser },
  } = useSelector((state) => state);

  const history = useHistory();

  const renderUserAvatar = objAuthUser ? (
    <Styled.AvatarUser>
      <img src={objAuthUser.picture} alt="avatar-icon" />
    </Styled.AvatarUser>
  ) : (
    <Styled.AvatarNoUser>
      <UserIcon />
    </Styled.AvatarNoUser>
  );

  const handleLogin = () => {
    history.push(LOGIN);
  };

  const handleLogout = () => {
    localStorage.removeItem('persist:root');
  };

  return (
    <Styled.UserNavbarPanel>
      <Styled.PanelUserList>
        <Styled.PanelUserListItem>{renderUserAvatar}</Styled.PanelUserListItem>

        <Styled.PanelUserListItem>
          {objAuthUser ? (
            <Button variant={BUTTON_TYPE.PRIMARY} onClick={handleLogout} text="Log out" />
          ) : (
            <Button variant={BUTTON_TYPE.PRIMARY} onClick={handleLogin} text="Log in" />
          )}
        </Styled.PanelUserListItem>
      </Styled.PanelUserList>
    </Styled.UserNavbarPanel>
  );
};

export default UserNavbar;
