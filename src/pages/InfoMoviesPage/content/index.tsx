import React, { Suspense, useEffect, useState } from 'react';
import { GetDetailMovie, IResponseDetailMovie } from '../../../Api/Movies/Details';
import BodyContentContainer from '../components/BodyContent';
import HeaderContentContainer from '../components/HeaderContent';
// import HeaderContentContainer from '../components/HeaderContent';
import PlaceHolderComponent from '../components/HeaderContent/PlaceHolder';

interface IInfoMoviesContentProps {
    MovieId: number,
    type: string
}
const InfoMoviesContent: React.FunctionComponent<IInfoMoviesContentProps> = (props) => {
    const {MovieId, type} = props;
    const [dataMovie, setDataMovie] = useState<IResponseDetailMovie>();
    useEffect(() =>{
      const getDataFromAPI = async() =>{
        const res = await GetDetailMovie(MovieId, type);
        setDataMovie(res);
      };
      getDataFromAPI();
    }, [])
  return (
    <>
    
      <div>
        {/* HEADER CONTENT */}
        {dataMovie ? (<HeaderContentContainer data={dataMovie}/>) : (<PlaceHolderComponent/>)}
        {/* BODY CONTENT */}
          {/* <BodyContentContainer data={dataMovie}/> */}
      </div>
    
    </>
        
  );
};

export default InfoMoviesContent;