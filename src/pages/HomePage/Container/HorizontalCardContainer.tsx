import React, { useEffect, useState } from 'react';
import { GetListTrending, IResultsListTrending } from '../../../Api/Movies/ListTrending';
import { HorizontalCardComponent } from '../components';
import { IMediaType } from './HorizontalCardWrapper';



interface IHorizontalCardContainerProps {
  type: string,
  mediaType: IMediaType
}

const HorizontalCardContainer: React.FunctionComponent<IHorizontalCardContainerProps> = (props) => {
  const {type, mediaType} = props;
  const [listConcrete, setListConcrete] = useState<IResultsListTrending[]>([]);
  useEffect(() => {
    const getDataFromAPI = async() =>{
      try{
        const res = await GetListTrending(type, mediaType);
        setListConcrete(res.results);
      }catch(e)
      {
        console.log(`ERROR fetch API with components: ${type} => ${e}`);
      }
    };
    getDataFromAPI();
  },[mediaType])
  return (
    <>
      <HorizontalCardComponent type={type} listMovies={listConcrete}/>
    </>
  );
};

export default HorizontalCardContainer;
