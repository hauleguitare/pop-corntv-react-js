import * as React from 'react';
import { BsSearch } from 'react-icons/bs';
import { IMAGE_BACKGROUND } from '../../../../images';



const JumbotronComponent: React.FunctionComponent = () => {
  return (
    <div className='h-full w-full relative text-black'>
        <img src={IMAGE_BACKGROUND} className='h-full w-full'/>
        <div className='fixed flex flex-col justify-center inset-0 h-[384px] w-auto'>
        <div className='flex flex-col px-8'>
            <h5 className='text-[80px] font-["Playfair_Display"] font-semibold italic'>Welcome</h5>
            <span className='font-["Playfair_Display"] font-medium text-[20px]'>Millions of movies, TV shows and people to discover. Explore now.</span>
            <div className='flex items-center justify-end w-full pt-8 relative'>
            <button className="fixed mr-4 mb-1" type='submit'>
                <BsSearch size={'25px'}/>
            </button>
            <form action="/search" className='w-full h-10'>
                <label htmlFor='search'>
                <input className='rounded-full w-full h-10 md:text-lg text-[13px] px-4 py-2 font-["Lora"] text-gray-600' placeholder='Seacrh for movies, TV shows and more...'/>
                </label>
            </form>
            </div>
        </div>
        </div>
    </div>
  );
};

export default JumbotronComponent;
