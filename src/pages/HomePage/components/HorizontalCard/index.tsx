import React, { useState } from 'react';
import ListCategoryContainer from '../../../../common/container/ListCategoryContainer';


const TempCategory = [
  {
    id: 12334,
    name: 'On TV'
  },
  {
    id: 33212,
    name: 'In theather'
  }
];

const HorizontalCardComponent: React.FunctionComponent = () => {
  const handleOnClick = (activeId: string) =>{
  }
  return(
    <div className="flex flex-col m-auto p-auto relative">
      <div className='sm:flex block py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl items-center'>
        <h1 className="">
          Trending
        </h1>
        <div className='text-sm sm:text-lg'>
          <ListCategoryContainer callbackActiveId={handleOnClick} listCategory={TempCategory} type={'trending'} displayCustom='flex flex-row my-4 justify-start'/>
        </div>
      </div>
      <div id='container_list_trending' className="flex overflow-x-scroll pb-10 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded">
        <div
          className="flex flex-nowrap sm:mx-8 mx-4"
        >
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
</div>
  ) ;
};

export default HorizontalCardComponent;




{/* <style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style> */}