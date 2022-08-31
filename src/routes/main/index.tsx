
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';




const RoutesMainContainer: React.FunctionComponent = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='*' element={<NotFoundPage/>} />
  </Routes>
  );
};

export default RoutesMainContainer;
