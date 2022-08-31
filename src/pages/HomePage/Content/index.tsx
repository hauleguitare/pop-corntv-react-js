import React, { useEffect, useState } from 'react';
import { GetListPopular } from '../../../Api';
import { IResultsListMoviesPopular } from '../../../Api/Movies/ListMoviesPopular';
import { CarouselSliderContainer, HorizontalCardContainer, JumbotronContainer, ListMoviesContainer } from '../Container';


const CategoryMovies: Array<string> = ['All', 'Bí ẩn', 'Chiến tranh', 'Chính kịch', 'Gia đình', 'Hài hước', 'Hành động', 'Kinh dị'];
const CategoryTvShows: Array<string> = ['Phổ biến', 'Phát sóng hôm nay', 'Đang ra', 'Top'];
const ShowMovies = {
  primary: {
    href: '#',
    title: 'The Wolf Of Wall Street',
    img: 'https://cdn.lorem.space/images/movie/.cache/500x0/the-wolf-wall-street-2013.jpg'
  },
  listSubMovies: [
    {
      href: '#',
      title: 'Cry Macho',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/cry-macho-2021.jpeg'
    },
    {
      href: '#',
      title: 'Lord Of The Ring',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/lord-of-the-rings-3.jpg'
    },
    {
      href: '#',
      title: 'Max & Max',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/max-max-2015.jpeg'
    },
    {
      href: '#',
      title: 'Matrix',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/matrix-1999.jpg'
    },
    {
      href: '#',
      title: 'Godzilla vs Kong 2',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/godzilla-kong-2.jpg'
    },
    {
      href: '#',
      title: 'Black Widow 2',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/black-widow-2.jpg'
    },
    {
      href: '#',
      title: 'Godzilla vs Kong',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/godzilla-kong.jpg'
    },
    {
      href: '#',
      title: 'Star wars: Last Jedi',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/star-wars-last-jedi.jpg'
    },
    {
      href: '#',
      title: 'Full Metal Jacket',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/full-metal-jacket-1987.jpg'
    },
    {
      href: '#',
      title: 'Lor Of The Ring',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/lord-of-the-rings-1.jpg'
    },
    {
      href: '#',
      title: 'Batman: Begins',
      img: 'https://cdn.lorem.space/images/movie/.cache/500x0/batman-begins-2005.jpeg'
    }
  ]
}




const HomePageContentComponent: React.FunctionComponent = () => {
  return(
    <main className="container flex flex-col justify-center z-30 text-white">
      {/* //* SECTION Jumbotron */}
      <JumbotronContainer/>

      {/* //* SECTION CarouselSlider */}
      {/* <CarouselSliderContainer/> */}

      {/* //* SECTION Horizontal Card */}
      <HorizontalCardContainer/>

      {/* //* SECTION Category List Movies */}
      <ListMoviesContainer title='PHIM LẺ' type='movie' />

      {/* //* SECTION Category List TV Shows */}
      <ListMoviesContainer title='PHIM BỘ' type='tv' />
    </main>
  )
};

export default HomePageContentComponent;