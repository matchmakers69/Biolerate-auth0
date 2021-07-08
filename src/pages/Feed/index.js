import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SeoWrapper from 'SeoWrapper';
import { Styled as StyledGrid } from 'styles/grid.styled';

const Feed = () => {
  return (
    <SeoWrapper bodyClass="page--feed" seoProps={{ title: 'Feed', description: 'Biorelate feed page description' }}>
      <StyledGrid.PageContent>
        <StyledGrid.Container>Feeds</StyledGrid.Container>
      </StyledGrid.PageContent>
    </SeoWrapper>
  );
};

Feed.propTypes = {};

export default Feed;
