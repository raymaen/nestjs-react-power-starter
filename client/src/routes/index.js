import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import pugPage from '../pages/pug.page';

export default function index() {
  return (
    <Routes>
      <Route exact path="/" component={pugPage} />
    </Routes>
  );
}