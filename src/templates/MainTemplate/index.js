import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyles from 'theme/globalStyles';
import theme from 'theme/theme';

const MainTemplate = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
