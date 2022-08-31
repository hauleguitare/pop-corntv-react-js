import * as React from 'react';
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsDiscord} from 'react-icons/bs';


const FooterComponent: React.FunctionComponent = () => {
  return (
      <footer className='static z-30 w-full bg-black/80 text-white'>
        <div className="container flex flex-col">
          <div className='block md:flex flex-row justify-start my-4 sm:my-8 px-4 md:px-0 md:py-8'>
            <div className='flex pb-8 md:pb-0 flex-col px-16 text-md my-4 sm:my-0 sm:text-xl font-["Merriweather"] md:border-r-2 border-gray-50'>
              <span className='pb-4 text-xl sm:text-2xl'>Infomation</span>
            <a href='#' className='group'>
              <span className='group-hover:text-red-500'>Contract Us</span>
            </a>
            <a href='#' className='group'>
              <span className='group-hover:text-red-500'>About Us</span>
            </a>
            <a href='#' className='group'>
              <span className='group-hover:text-red-500'>Movies list</span>
            </a>
            </div>
            <div className='flex pb-8 md:pb-0 flex-col px-16 text-md my-4 sm:my-0 sm:text-xl font-["Merriweather"]'>
              <span className='pb-4 text-xl sm:text-2xl'>Category</span>
              <a href='#' className='group'>
                <span className='group-hover:text-red-500'>Movies</span>
              </a>
              <a href='#' className='group'>
                <span className='group-hover:text-red-500'>TV Show</span>
              </a>
              <a href='#' className='group'>
                <span className='group-hover:text-red-500'>People</span>
              </a>
              <a href='#' className='group'>
                <span className='group-hover:text-red-500'>More</span>
              </a>
            </div>
            <div className='ml-auto px-4 py-4 flex items-center justify-center shadow-lg bg-gradient-to-tr from-indigo-300 to-violet-700 rounded-md'>
              <div className='flex items-center flex-col sm:flex-row font-["Merriweather"]'>
                <span className='text-center text-md sm:text-xl md:text-2xl  sm:mx-4 mt-4 sm:mt-0 text-black'>Let's start Watchlist to watch more the best movies!</span>
                <a href='#' className='mx-8 my-4'>
                  <span className='text-sm sm:text-2xl bg-white/30 sm:x-2 px-2 sm:px-4 py-2 sm:py-4 rounded-md hover:bg-white transition-all ease-in-out duration-150 text-black'>Watchlist</span>
                </a>
              </div>
            </div>
            
          </div>

          <div className='flex gap-4 py-8 justify-center'>
            <a href='#' className='mx-2 group'>
              <BsFacebook  size={'35px'} className='group-hover:fill-blue-600'/>
            </a>
            <a href='#' className='mx-2 group'>
              <BsInstagram  size={'35px'} className='group-hover:fill-rose-500'/>
            </a>
            <a href='#' className='mx-2 group'>
              <BsTwitter  size={'35px'} className='group-hover:fill-sky-600'/>
            </a>
            <a href='#' className='mx-2 group'>
              <BsYoutube  size={'35px'} className='group-hover:fill-red-700'/>
            </a>
            <a href='#' className='mx-2 group'>
              <BsDiscord  size={'35px'} className='group-hover:fill-violet-400'/>
            </a>
          </div>
        </div>
      </footer>
  );
};

export default FooterComponent;
