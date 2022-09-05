import * as React from 'react';
import OverViewComponent from './OverView';
import ReferenceCategoryComponent from './ReferenceCategory';
import ReferenceCategoryContainer from './ReferenceCategoryContainer';
import TitleContentComponent from './TitleContent';
import UserScoreComponent from './UserScore';

interface IHeaderContentComponentProps {
}
//bg-[url("https://image.tmdb.org/t/p/w780/eljErfkQUcFUgQkI4I1soZcH8MW.jpg")]
const HeaderContentComponent: React.FunctionComponent<IHeaderContentComponentProps> = (props) => {
  return (
  <div className='relative'>
      <img src="https://image.tmdb.org/t/p/original/eljErfkQUcFUgQkI4I1soZcH8MW.jpg" className='h-full w-full object-cover absolute inset-0'/>
      <div className='absolute inset-0 backdrop-blur-[2px] bg-stone-900/70 z-0'></div>
      <div className='container text-white sm:px-8 sm:py-8 relative flex flex-col sm:flex-row'>
          <div className='relative min-w-[300px] min-h-[450px] sm:min-w-[300px] sm:min-h-[450px] mx-12 sm:mx-0 sm:ml-0'>
            <img src='https://image.tmdb.org/t/p/w300/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg' className='rounded-lg shadow-xl'/>
          </div>
          <div className='pt-4 sm:pl-4 sm:ml-2 flex flex-col'>
            <div className='flex flex-col'>
              <TitleContentComponent title='NỮ KHỦNG LỒ XANH' release_date='2022-10-12' className='flex text-white font-["Merriweather"] text-2xl sm:text-3xl justify-center sm:justify-start'/>
              <ReferenceCategoryContainer className='text-sm gap-2 flex justify-center sm:justify-start flex-wrap sm:flex-nowrap'/>
            </div>
              <UserScoreComponent className='flex flex-col sm:flex-row gap-4 py-4 items-center'/>
            <div className='flex flex-col py-4'>
              <h1>OVERVIEW</h1>
              <OverViewComponent text={'She-Hulk xoay quanh cuộc sống của nữ luật sư Jennifer Walters từ sau khi được anh họ cứu mạng và truyền phóng xạ để trở nên có siêu năng lực đầy mạnh mẽ. Cô sát cánh cùng anh trai chiến đấu bảo vệ lẽ phải và mang đến cuộc sống bình yên cho người dân…'}/>
            </div>
            <div className='flex flex-col py-4'>
              <h1>CREATOR</h1>
              <a href='#'>
                <span>Jessica Gao</span>
              </a>
            </div>
          </div>
      </div>
  </div>
  );
};

export default HeaderContentComponent;
