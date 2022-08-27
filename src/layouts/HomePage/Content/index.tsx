import * as React from 'react';
import CarouselSliderComponent from '../components/CarouselSlider';
import HorizontalCardComponent from '../components/HorizontalCard';
import CategoryMoviesComponent from '../components/CategoryMovies';
import JumbotronComponent from '../components/Jumbotron';
import ListGenresMoviesComponent from '../components/ListGenresMovies';
import {BsArrowUpRightCircle} from 'react-icons/bs';
import ListConcreteMoviesComponent from '../components/ListGenresMovies';

const CategoryMovies: Array<string> = ['All', 'Bí ẩn', 'Chiến tranh', 'Chính kịch', 'Gia đình', 'Hài hước', 'Hành động', 'Kinh dị'];
const CategoryTvShows: Array<string> = ['Phổ biến', 'Phát sóng hôm nay', 'Đang ra', 'Top'];
const ShowMovies = {
  primary: {
    href: '#',
    title: 'The Wolf Of Wall Street',
    img: 'https://cdn.lorem.space/images/movie/.cache/500x0/the-wolf-wall-street-2013.jpg'
  },
  subMovies: [
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
    <main className="relative container flex flex-col justify-center z-30 bg-cyan-50 backdrop-blur bg-white/10 text-white">
      {/* //* SECTION Jumbotron */}
      <section className='relative flex justify-center h-96'>
        <JumbotronComponent/>
      </section>

      {/* //* SECTION CarouselSlider */}
      <section className='container px-4 pt-4 pb-16 sm:px-0'>
        <CarouselSliderComponent/>
      </section>

      {/* //* SECTION Category Movies */}
      <section>
      <CategoryMoviesComponent listCategory={CategoryMovies}/>
      </section>

      {/* //* SECTION Horizontal Card */}
      <section>
        <HorizontalCardComponent/>
      </section>

      {/* //* SECTION Category List Movies */}
      <section className='flex relative flex-col my-4'>
        <div className='flex relative flex-row justify-between'>
          <h1 className='text-4xl py-5 px-8 font-bold'>PHIM LẺ</h1>
          <a href='#' className='flex flex-row items-center gap-2 mx-4 group text-sm sm:text-xl'>
            <span className='font-["Lora"] bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out hover:text-red-500'>Xem tất cả</span>
            <BsArrowUpRightCircle className='group-hover:rotate-180 origin-center duration-200 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]'/>
          </a>
        </div>
        <div className='container my-4 sm:border-b-2 border-gray-400'>
          <CategoryMoviesComponent listCategory={CategoryMovies}/>
        </div>
        <ListGenresMoviesComponent primary={ShowMovies.primary} listSubMovie={ShowMovies.subMovies}/>
      </section>

      {/* //* SECTION Category List TV Shows */}
      <section className="flex relative flex-col my-4">
        <div className='flex relative flex-row justify-between'>
          <h1 className='text-4xl py-4 px-8 font-bold'>PHIM BỘ</h1>
          <a href='#' className='flex flex-row items-center gap-2 mx-4 group text-sm sm:text-xl'>
            <span className='font-["Lora"] bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out hover:text-red-500'>Xem tất cả</span>
            <BsArrowUpRightCircle className='group-hover:rotate-180 origin-center duration-200 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]'/>
          </a>
        </div>
        <div className='container my-4 sm:border-b-2 border-gray-400'>
          <CategoryMoviesComponent listCategory={CategoryTvShows}/>
        </div>
        <ListConcreteMoviesComponent primary={ShowMovies.primary} listSubMovie={ShowMovies.subMovies}/>
      </section>
    </main>
  )
};

export default HomePageContentComponent;