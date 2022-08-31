import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './layouts/Footer';
import NavBarComponent from './layouts/NavBar';
import RoutesMainContainer from './routes/main';



function App() {
  return (
    <div id='main-app'>
      <NavBarComponent />
        <div id='body_content' className='pt-[var(--height-navbar)] relative bg-gradient-to-t to-stone-800/90 via-stone-900 from-black/70'>
          <RoutesMainContainer/>
        </div>
      <FooterComponent />
    </div>
  );
}

export default App;
