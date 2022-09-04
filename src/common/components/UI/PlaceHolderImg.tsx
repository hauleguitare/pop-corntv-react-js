import React from 'react';
import SpinnerLoadingComponent from './SpinnerLoading';

interface IPlaceHolderImgComponentProps {
}

const PlaceHolderImgComponent: React.FunctionComponent<IPlaceHolderImgComponentProps> = (props) => {
  return (
      <div className='h-full w-full relative'>
        <img src='https://davincifilmfestival.com/wp-content/uploads/2022/07/film-poster-placeholder.png' className='object-cover h-full w-full transition-all ease-in duration-200' />
        <div className='absolute inset-0 flex items-center justify-center'>
        <SpinnerLoadingComponent />
        </div>
      </div>
      
  );
};

export default PlaceHolderImgComponent;
