import React from 'react';
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