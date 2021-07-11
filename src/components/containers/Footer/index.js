import React from 'react';
import { useSelector } from 'react-redux';
import { BottomFooter } from './Footer.styled';
import { Styled } from 'styles/grid.styled';

const Footer = () => {
  const {
    ui: { displayFooter },
  } = useSelector((state) => state);

  if (displayFooter)
    return (
      <BottomFooter>
        <Styled.Container>Footer</Styled.Container>
      </BottomFooter>
    );
  return null;
};

export default Footer;
