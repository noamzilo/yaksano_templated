import React from 'react';
import PropTypes from 'prop-types';
import Header from 'parts/Header';
import Footer from 'parts/Footer';

export const Layout = ({ children }) => {
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
