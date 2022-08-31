import React, { useEffect, useState } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { GetListCategory, IResultCategory } from '../../../Api/Category';
import { IResultsListMoviesPopular } from '../../../Api/Movies/ListMoviesPopular';
import ListCategoryContainer from '../../../common/container/ListCategoryContainer';
import { ListMoviesComponent } from '../components';
import {GetListPopular} from '../../../Api';



interface IListMovies {
    primary: IResultsListMoviesPopular,
    listSubMovies: Array<IResultsListMoviesPopular>
}


interface IListMoviesContainerProps {
    title: string,
    type: string,
}

const mapActiveIdToType = (activeId: string, type: string): number => {
  var Id = Number(activeId.replace(`${type}-`, ''));
  if (Number.isNaN(Id))
  {
    return -1;
  }
  return Id;
}


const ListMoviesContainer: React.FunctionComponent<IListMoviesContainerProps> = (props) => {
    const {title , type} = props;
    const [category, setCategory] = useState<IResultCategory[]>([]);
    const [listConcrete, setListConcrete] = useState<IResultsListMoviesPopular[]>([]);
    const [selectCategory, setSelectCategory] = useState<number>(0);


    const handleActiveCategory = (activeId: string) =>{
      const Id = mapActiveIdToType(activeId, type);
      if (Id === -1)
      {
        return;
      }else{
        setSelectCategory(Id);
      }
    }
    useEffect(() => {
      const getDataFromAPI = async () => {
        try{
          const res = await GetListPopular(type);
          const data = res.results;
          setListConcrete(data);
        }catch(e)
        {
          console.log(e);
        }
        
      };
      getDataFromAPI();
    }, [])
    

    useEffect(() => {
      const getCategory = async() => {
        const res = await GetListCategory(type, 'vi');
        const data = res.genres;
        setCategory(data);
      }
      getCategory();
    },[])

    

  return (
    <section className='flex relative flex-col my-4'>
    <div className='flex relative flex-row justify-between'>
      <h1 className='text-4xl py-5 px-8 font-bold'>{title}</h1>
      <a href='#' className='flex flex-row items-center gap-2 mx-4 group text-sm sm:text-xl'>
        <span className='font-["Lora"] bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out hover:text-red-500'>Xem tất cả</span>
        <BsArrowUpRightCircle className='group-hover:rotate-180 origin-center duration-200 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]'/>
      </a>
    </div>
    <div className='container my-4 pb-4 sm:border-b-2 border-gray-400 text-md sm:text-xl'>
      <ListCategoryContainer callbackActiveId={handleActiveCategory} listCategory={category} displayCustom='flex flex-wrap sm:flex-row justify-start' type={type} />
    </div>
    <ListMoviesComponent listMovie={listConcrete} type={type}/>
  </section>
  );
};

export default ListMoviesContainer;
