import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Seo from 'components/Seo';

const SeoWrapper = ({ bodyClass = 'page', seoProps = {}, children = [] }) => {
  return (
    <div className="page-wrapper">
      <Helmet
        bodyAttributes={{
          class: bodyClass,
        }}
      />
      <Seo {...seoProps} />

      {children}
    </div>
  );
};

SeoWrapper.propTypes = {
  bodyClass: PropTypes.string,
  seoProps: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SeoWrapper;
