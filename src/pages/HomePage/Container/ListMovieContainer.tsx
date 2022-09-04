import React, { Suspense, useEffect, useState } from 'react';
import { GetListDiscover, IResponseListMoviesPopular, IResultsListMovies } from '../../../Api/Movies/ListMovies';
import {GetListPopular} from '../../../Api';
import SpinnerLoadingComponent from '../../../common/components/UI/SpinnerLoading';
import { useSelector } from 'react-redux';
import rootReducer, { IRootReducer } from '../../../reducer';
import { IActiveIdState } from '../../../reducer/ActiveCategory';
// import { ListMoviesComponent } from '../components';



interface IListMovies {
    primary: IResultsListMovies,
    listSubMovies: Array<IResultsListMovies>
}


interface IListMoviesContainerProps {
    type: string,
    // categoryId?: number | string
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
const ParseCategory = (categoryId: string | undefined, type: string) =>{
  if (categoryId)
  {
    return categoryId.replace(`${type}-`, '');
  }else{
    return
  }
}

const ListMoviesContainer: React.FunctionComponent<IListMoviesContainerProps> = (props) => {
    const {type} = props;
    const [listConcrete, setListConcrete] = useState<IResultsListMovies[]>([]);
    const categoryId = useSelector((reducer: IRootReducer) =>{
      return(
        reducer.activeCategoryReducer[type].id
      )
    });
    useEffect(() => {
      const getDataFromAPI = async() =>{
        try{
          const categoryParams = ParseCategory(categoryId?.toString(), type);
          const res = await(GetListDiscover(type, categoryParams));
          const data = res.results;
          setListConcrete(data);
        }catch(e)
        {
          console.log(e);
        }
      }
      getDataFromAPI();
    }, [categoryId])
  return (
    <Suspense fallback={<SpinnerLoadingComponent />}>
      <ListMoviesComponent listMovie={listConcrete} type={type}/>
    </Suspense>
  );
};

export default ListMoviesContainer;
