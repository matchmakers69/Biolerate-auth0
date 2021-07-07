import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/containers/Header';
import Footer from 'components/containers/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
