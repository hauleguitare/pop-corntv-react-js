import React, { useEffect, useState } from 'react';
import { IRootReducer } from '../../../reducer';
import { CarouselSliderContainer, HorizontalCardContainer, JumbotronContainer, ListMoviesContainer } from '../Container';
import HorizontalCardWrapper from '../Container/HorizontalCardWrapper';
import ListMoviesWrapper from '../Container/ListMoviesWrapper';



const HomePageContent: React.FunctionComponent = () => {
  return(
    <main className="container flex flex-col justify-center z-30 text-white">
      {/* //* SECTION Jumbotron */}
      <JumbotronContainer/>

      {/* //* SECTION CarouselSlider */}
      {/* <CarouselSliderContainer/> */}

      {/* //* SECTION Horizontal Card */}
        {/* <HorizontalCardContainer type='trending'/> */}
        <HorizontalCardWrapper type='trending' title='Trending'/>

      {/* //* SECTION Category List Movies */}
      <ListMoviesWrapper title='PHIM LẺ' type='movie' />

      {/* //* SECTION Category List TV Shows */}
      <ListMoviesWrapper title='PHIM BỘ' type='tv' />
    </main>
  )
};

export default HomePageContent;