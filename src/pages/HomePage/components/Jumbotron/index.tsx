import * as React from 'react';
import { BsSearch } from 'react-icons/bs';
import { IMAGE_BACKGROUND } from '../../../../images';
import SeacrhBarComponent from './components/SearchBar';



const JumbotronComponent: React.FunctionComponent = () => {
  return (
    <div className='h-full w-full relative text-black'>
        <img src={'https://i.picsum.photos/id/1005/1280/384.jpg?blur=5&hmac=txA53Shl-EU-sxvJXaEYiwzrRMVmL3u_5AYe9PJ_7-w'} className='h-full w-full object-cover'/>
        <div className='absolute flex flex-col justify-center inset-0 h-[384px] w-auto'>
        <div className='flex flex-col px-8'>
          <h5 className='text-[80px] font-["Playfair_Display"] font-semibold italic'>Welcome</h5>
          <span className='font-["Playfair_Display"] font-medium text-[20px]'>Millions of movies, TV shows and people to discover. Explore now.</span>
          <SeacrhBarComponent/>
        </div>
        </div>
    </div>
  );
};

export default JumbotronComponent;
