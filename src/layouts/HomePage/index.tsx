import * as React from 'react';
import FooterComponent from '../../common/Footer';
import NavBarComponent from '../../common/NavBar';
import HomePageContentComponent from './Content';



const HomePage: React.FunctionComponent = () => {
  return (
  <div id='body_content' className='h-screen overflow-x-hidden relative bg-gradient-to-t to-slate-900 via-stone-900 from-black'>
        <NavBarComponent />
        <div>
          <HomePageContentComponent />
        </div>
        <FooterComponent />
  </div>);
};

export default HomePage;
