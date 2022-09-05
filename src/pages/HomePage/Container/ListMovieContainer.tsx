import React, { Suspense, useEffect, useState } from 'react';
import { GetListDiscover, IResultsListMovies } from '../../../Api/Movies/ListMovies';
import SpinnerLoadingComponent from '../../../common/components/UI/SpinnerLoading';
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../../reducer';
import ActionActiveCategory from '../../../action/ActiveCategory';
import { useDispatch } from 'react-redux';
import PlaceHolderSwitchCategoryComponent from '../../../common/components/UI/PlaceHolderSwitchCategory';



interface IListMovies {
    primary: IResultsListMovies,
    listSubMovies: Array<IResultsListMovies>
}


interface IListMoviesContainerProps {
    type: string,
    // categoryId?: number | string
}

const ParseCategory = (categoryId: string | undefined, type: string): string | undefined =>{
  if (categoryId)
  {
    return categoryId.replace(`${type}-`, '');
  }else{
    return;
  }
}

const mapActiveIdToType = (activeId: string, type: string): number => {
  var Id = Number(activeId.replace(`${type}-`, ''));
  if (Number.isNaN(Id))
  {
    return -1;
  }
  return Id;
}


const ListMoviesComponent = React.lazy(() => import('../components/ListMovies'));

const ListMoviesContainer: React.FunctionComponent<IListMoviesContainerProps> = (props) => {
    const {type} = props;
    const ActionCreator = new ActionActiveCategory(type);
    const dispatch = useDispatch();
    const [listConcrete, setListConcrete] = useState<IResultsListMovies[]>([]);
    const categoryId = useSelector((reducer: IRootReducer) =>{
      return(
        reducer.activeCategoryReducer[type].data
      )
    });
    const StatusGetAPI = useSelector((reducer: IRootReducer) => {
      return(
        reducer.activeCategoryReducer[type].status
      )
    })
    useEffect(() => {
      const getDataFromAPI = async() =>{
        try{
          const categoryParams = ParseCategory(categoryId?.id?.toString(), type);
          const res = await GetListDiscover(type, categoryParams);
          const data = res.results;
          setListConcrete(data);
          dispatch(ActionCreator.UpdateStatus(true));
        }catch(e)
        {
          console.log(e);
        }
      }
        getDataFromAPI();
    }, [StatusGetAPI === false])
  return (
    
    <Suspense fallback={<SpinnerLoadingComponent />}>
      <ul className='grid grid-flow-row grid-cols-2 sm:grid-cols-6 sm:grid-rows-4 sm:grid-flow-col gap-4 relative'>
        <Suspense fallback={<SpinnerLoadingComponent/>}>
         <ListMoviesComponent listMovie={listConcrete} type={type}/>
         {StatusGetAPI ? (<></>) : (<PlaceHolderSwitchCategoryComponent />)}
        </Suspense>
      </ul>
    </Suspense>
  );
};

export default ListMoviesContainer;
