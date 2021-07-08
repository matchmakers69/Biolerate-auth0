import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const {
    ui: { displayFooter },
  } = useSelector((state) => state);

  if (displayFooter) return <div>Footer</div>;
  return null;
};

export default Footer;
