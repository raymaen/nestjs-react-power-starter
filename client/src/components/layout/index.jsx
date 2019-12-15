import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

export default function index({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
