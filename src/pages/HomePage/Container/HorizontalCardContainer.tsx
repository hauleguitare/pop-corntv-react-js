import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionActiveCategory from '../../../action/activeCategory';
import { GetListTrending, IDetailMovieTrending } from '../../../Api/Movies/ListTrending';
import PlaceHolderSwitchCategoryComponent from '../../../common/components/UI/PlaceHolderSwitchCategory';
import { IRootReducer } from '../../../reducer';
import { HorizontalCardComponent } from '../components';



interface IHorizontalCardContainerProps {
  type: string,
}

const ParseMediaType = (mediaTypeId: string | undefined, type: string): string | undefined =>{
  if(mediaTypeId)
  {
    return mediaTypeId?.replace(`${type}-`, '');
  }else{
    return
  }
}


const HorizontalCardContainer: React.FunctionComponent<IHorizontalCardContainerProps> = (props) => {
  const {type} = props;
  const [listConcrete, setListConcrete] = useState<IDetailMovieTrending[]>([]);
  const dispatch = useDispatch();
  const ActionCreator = new ActionActiveCategory(type);
  const Mediatype = useSelector((reducer: IRootReducer) =>{
    return reducer.activeCategoryReducer[type].data
  })
  const StatusGetAPI = useSelector((reducer: IRootReducer) =>{
    return reducer.activeCategoryReducer[type].status
  })
  useEffect(() => {
    const getDataFromAPI = async() =>{
      try{
        const mediaTypeParams = ParseMediaType(Mediatype?.id?.toString(), type)
        const res = await GetListTrending(type, mediaTypeParams);
        setListConcrete(res.results);
        dispatch(ActionCreator.UpdateStatus(true));
      }catch(e)
      {
        console.log(`ERROR fetch API with components: ${type} => ${e}`);
      }
    };
    getDataFromAPI();
  },[StatusGetAPI === false])
  return (
    <>
      <HorizontalCardComponent type={type} listMovies={listConcrete}/>
      {StatusGetAPI ? (<></>) : (<PlaceHolderSwitchCategoryComponent />)}
    </>
  );
};

export default HorizontalCardContainer;
