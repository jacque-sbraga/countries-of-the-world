import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PageError from './pages/PageError';
import Details from './components/Details';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/region/:name' element={<Home />} />

      <Route path='/country/:id' element={<Details />} />
      <Route path='*' element={<PageError message='404 -Page not found' />} />
    </Routes>
  );
}
