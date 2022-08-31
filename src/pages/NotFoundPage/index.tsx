import * as React from 'react';
import {FaSadTear} from 'react-icons/fa';
import { Link} from 'react-router-dom';


const NotFoundPage: React.FunctionComponent = () => {


  return (
    <div className='container flex flex-col items-center justify-center text-white'>
      <h1 className='text-[80px] sm:text-[120px] font-["Poppins"] font-bold'>404</h1>
      <FaSadTear size={'10rem'} className='mx-4 my-4'/>
      <span className='text-[20px] sm:text-[40px] font-["Poppins"] text-center md:text-start'>Sorry, the page you looking for could not be found</span>
      <span className='text-[15px] sm:text-[20px] font-["Poppins"]'>Please return the Home Page</span>
      <Link to={'/'} className='text-md sm:text-3xl font-["Poppins"] bg-sky-500 mx-4 my-4 px-2 py-2 sm:px-4 sm:py-4 rounded-xl hover:bg-sky-300 transition-all ease-linear duration-150'>Return Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
