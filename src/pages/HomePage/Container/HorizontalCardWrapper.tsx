import React, { useState } from 'react';
import ListCategoryContainer from '../../../common/container/ListCategoryContainer';
import HorizontalCardContainer from './HorizontalCardContainer';

interface IHorizontalCardWrapperProps {
    type: string,
    title: string
}

const TempCategory = [
  {
    id: 'all',
    name: 'All',
  },
  {
    id: 'movie',
    name: 'Movies'
  },
  {
    id: 'tv',
    name: 'TV Show'
  },
  {
    id: 'person',
    name: 'Person'
  }
];


// export type IMediaType = 'all' | 'movie' | 'tv' | 'person'
const MediaType = ['all', 'movie', 'tv', 'person'] as const;
export type IMediaType = (typeof MediaType)[number];


const isMediaType = (item: any ): item is IMediaType =>{
  item = item as IMediaType;
  return MediaType.includes(item);
}


const HorizontalCardWrapper: React.FunctionComponent<IHorizontalCardWrapperProps> = (props) => {
    const {type, title} = props;
    const [mediaType, setMediaType] = useState<IMediaType>('all');
    //Handle Onclick
    const HandleOnClick = (item: string) =>{
      const category = item.replace('trending-', '');
      if (isMediaType(category))
      {
        setMediaType(category);
      }
    }
  return (
      <section className='flex flex-col relative'>
        <div className='sm:flex block py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl categorys-center'>
          <h1 className="">
          {title}
          </h1>
          {/* LIST CATEGORY CONTAINER */}
          <div className='text-sm sm:text-lg'>
            <ListCategoryContainer listCategory={TempCategory} type={type} displayCustom='flex flex-row my-4 justify-start' DefaultActiveId='trending-all' />
          </div>
        </div>
        <div>
          {/* HORIZONTAL CARD CONTAINER */}
          <HorizontalCardContainer type='trending' mediaType={mediaType}/>
        </div>
      </section>
  );
};

export default HorizontalCardWrapper;
