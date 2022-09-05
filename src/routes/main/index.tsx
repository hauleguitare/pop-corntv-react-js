
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import InfoMoviesPage from '../../pages/InfoMoviesPage';
import NotFoundPage from '../../pages/NotFoundPage';




const RoutesMainContainer: React.FunctionComponent = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path=':type'>
      <Route path=':id' element={<InfoMoviesPage/>} />
      {/* <Route path='list/:type' element={<ConreteMoviesPage/>} /> */}
    </Route>
    <Route path='*' element={<NotFoundPage/>} />
  </Routes>
  );
};

export default RoutesMainContainer;
