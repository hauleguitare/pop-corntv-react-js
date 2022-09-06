import * as React from 'react';
import { IResponseDetailMovie } from '../../../../Api/Movies/Details';
import BannerMovieWrapper from '../../container/BannerMovieWrapper';
import OverviewWrapper from '../../container/OverviewWrapper';
import PosterMovieWrapper from '../../container/PosterMovieWrapper';
import ReferenceCategoryContainer from '../../container/ReferenceCategoryContainer';
import TitleContentWrapper from '../../container/TitleContentWrapper';
import UserScoreWrapper from '../../container/UserScoreWrapper';
import BannerMovieComponent from './BannerMovie';
import OverViewComponent from './OverView';
import PosterMovieComponent from './PosterMovie';
import TitleContentComponent from './TitleContent';
import UserScoreComponent from './UserScore';

interface IHeaderContentContainerProps {
  data : IResponseDetailMovie
}

const url ='https://image.tmdb.org/t/p';

const HeaderContentContainer: React.FunctionComponent<IHeaderContentContainerProps> = (props) => {
  const {data} = props;
  return (
  <div className='relative'>
      {/* Backdrop */}
      <BannerMovieWrapper className='absolute inset-0'>
        <BannerMovieComponent url={`${url}/original`} path={data.backdrop_path}/>
      </BannerMovieWrapper>

      <div className='container text-white sm:px-8 sm:py-8 relative flex flex-col sm:flex-row'>

        {/* Poster */}
        <PosterMovieWrapper className='relative min-w-[300px] min-h-[450px] sm:min-w-[300px] sm:min-h-[450px] mx-12 sm:mx-0 sm:ml-0'>
          <PosterMovieComponent url={`${url}/w300`} path={data.poster_path}/>
        </PosterMovieWrapper>
          <div className='mt-4 sm:mt-8 mx-4 flex flex-col'>

            {/* Title + Category */}
            <TitleContentWrapper className='flex flex-col min-h-[48px] sm:min-h-[56px] max-w-full sm:max-w-[600px] relative'>
              <TitleContentComponent title={(data.title) ? (data.title) : (data.name)} release_date='2022-10-12' className='flex text-white font-["Merriweather"] text-2xl sm:text-3xl justify-center sm:justify-start'/>
              <ReferenceCategoryContainer className='text-sm gap-2 flex justify-center sm:justify-start flex-wrap sm:flex-nowrap' listCategory={data.genres}/>
            </TitleContentWrapper>

            {/* User Score */}
            <UserScoreWrapper className='flex flex-col sm:flex-row gap-4 my-4 justify-center items-center relative min-h-[60px] max-w-full sm:min-h-[80px] sm:max-w-[400px]'>
              <UserScoreComponent percentage={data.vote_average}/>
            </UserScoreWrapper>

              {/* OverView */}
            
            <OverviewWrapper className='flex flex-col mb-4 min-h-[100px] sm:min-h-[160px] min-w-[100px] sm:min-w-[100vh] relative'>
              <h1 className='font-["Poppins"] font-bold text-xl'>OVERVIEW</h1>
              <OverViewComponent text={data.overview} className='text-sm font-["Lora"]' />
            </OverviewWrapper>

            {/* <div className='flex flex-col py-4'>
              <h1 className='font-["Poppins"] font-bold text-xl'>CREATOR</h1>
              <InfoCreatorComponent />
            </div> */}
          </div>
      </div>
  </div>
  );
};

export default HeaderContentContainer;
