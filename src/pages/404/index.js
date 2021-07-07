import React from 'react';
import SeoWrapper from 'SeoWrapper';
import { Styled } from './404.styled';

const NotFound = () => {
  return (
    <SeoWrapper bodyClass="page--404" seoProps={{ title: 'Biorelate 404', description: 'Page not found' }}>
      <Styled.PageLayout>
        <h2 className="intro-title">404</h2>
        <p>Sorry page has not been found</p>
      </Styled.PageLayout>
    </SeoWrapper>
  );
};

export default NotFound;
