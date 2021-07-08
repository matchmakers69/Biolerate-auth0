import React from 'react';
import PropTypes from 'prop-types';

const AccountTemplate = ({ children }) => {
  return (
    <div className="template-wrapper">
      <div className="nav-left">nav here</div>
      <div className="panel">{children}</div>
    </div>
  );
};

AccountTemplate.propTypes = {};

export default AccountTemplate;
