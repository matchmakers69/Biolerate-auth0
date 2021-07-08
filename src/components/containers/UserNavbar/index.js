import React from 'react';
import { Styled } from './UserNavbar.styled';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { constants } from '../../../constants';
import { logout } from 'store/auth/actions';
import { ReactComponent as UserIcon } from 'assets/icons/svg/user.svg';
import Button, { BUTTON_COLOR } from 'components/common/Button';

const { LOGIN, ROOT } = constants.route;

const UserNavbar = ({ history }) => {
  const {
    auth: { objAuthUser },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

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
    dispatch(logout(history));
  };

  return (
    <Styled.UserNavbarPanel>
      <Styled.PanelUserList>
        <Styled.PanelUserListItem>{renderUserAvatar}</Styled.PanelUserListItem>

        <Styled.PanelUserListItem>
          {objAuthUser ? (
            <Button variant={BUTTON_COLOR.PRIMARY} onClick={handleLogout} text="Log out" />
          ) : (
            <Button variant={BUTTON_COLOR.PRIMARY} onClick={handleLogin} text="Log in" />
          )}
        </Styled.PanelUserListItem>
      </Styled.PanelUserList>
    </Styled.UserNavbarPanel>
  );
};

export default withRouter(UserNavbar);
