import * as React from 'react';
import BannerMovieWrapper from '../../container/BannerMovieWrapper';
import OverviewWrapper from '../../container/OverviewWrapper';
import PosterMovieWrapper from '../../container/PosterMovieWrapper';
import TitleContentWrapper from '../../container/TitleContentWrapper';
import UserScoreWrapper from '../../container/UserScoreWrapper';

interface IPlaceHolderComponentProps {
}

const PlaceHolderComponent: React.FunctionComponent<IPlaceHolderComponentProps> = (props) => {
  return (
    <div className='relative'>
      {/* Backdrop */}
      <BannerMovieWrapper className='absolute inset-0' />
      
      <div className='container text-white sm:px-8 sm:py-8 relative flex flex-col sm:flex-row'>
        {/* Poster */}
        <PosterMovieWrapper className='relative min-w-[300px] min-h-[450px] sm:min-w-[300px] sm:min-h-[450px] mx-12 sm:mx-0 sm:ml-0' />

          <div className='mt-4 sm:mt-8 mx-12 sm:mx-4 flex flex-col'>
            {/* Title + Category */}
            <TitleContentWrapper className='flex flex-col min-h-[48px] sm:min-h-[56px] max-w-[236px] sm:max-w-[600px] relative' />

            {/* User Score */}
            <UserScoreWrapper className='flex flex-col sm:flex-row gap-4 my-4 relative min-h-[60px] max-w-[300px] sm:min-h-[80px] sm:max-w-[300px]' />

              {/* OverView */}
            <OverviewWrapper className='flex flex-col mb-4 min-h-[100px] sm:min-h-[160px] min-w-full sm:min-w-[100vh] relative' />

          </div>
      </div>
  </div>
  );
};

export default PlaceHolderComponent;
