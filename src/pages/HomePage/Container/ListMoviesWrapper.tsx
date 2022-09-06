import React, { Suspense, useEffect, useState } from 'react';
import { GetListCategory, IResultCategory } from '../../../Api/Category';
import PlaceHolderSwitchCategoryComponent from '../../../common/components/UI/PlaceHolderSwitchCategory';


interface IListMoviesWrapperProps {
    title: string,
    type: string,
}




const ListMoviesWrapper: React.FunctionComponent<IListMoviesWrapperProps> = (props) => {
    const {title, type} = props;
    const [category, setCategory] = useState<IResultCategory[]>([]);
    
    useEffect(() => {
        const getCategory = async() => {
          const res = await GetListCategory(type, 'vi');
          const data = res.genres;
          setCategory(data);
        }
        getCategory();
      },[])
  
const ViewAllComponent = React.lazy(() => import ('../../../common/components/UI/ViewAll'));
const ListCategoryContainer = React.lazy(() => import('../../../common/container/ListCategoryContainer'));
const ListMoviesContainer = React.lazy(() => import ('./ListMovieContainer'));


  return (
    <section className='flex relative flex-col my-4'>
      <Suspense fallback={<PlaceHolderSwitchCategoryComponent/>}>
        <div className='flex relative flex-row justify-between'>
            <h1 className='text-4xl py-5 px-8 font-bold'>{title}</h1>
            <ViewAllComponent LinkTo='/abc'/>
        </div>
        <div className='container my-4 pb-4 sm:border-b-2 border-gray-400 text-md sm:text-xl'>
        <ListCategoryContainer listCategory={category} displayCustom='flex flex-wrap sm:flex-row justify-start' type={type} />
        </div>
        <Suspense fallback={<PlaceHolderSwitchCategoryComponent/>}>
          <ListMoviesContainer type={type} />
        </Suspense>
      </Suspense>
    </section>
  );
};

export default ListMoviesWrapper;
