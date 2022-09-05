import React from 'react';
import { IResultsListTrending } from '../../../../Api/Movies/ListTrending';
import SubCardComponent from './SubCard';


interface HorizontalCardComponentProps {
  listMovies: IResultsListTrending[],
  type: string,
}

const HorizontalCardComponent: React.FunctionComponent<HorizontalCardComponentProps> = (props) => {
  const {listMovies ,type} = props;
 
  return(
    <>
      <div id='container_list_trending' className="flex overflow-x-scroll pb-10 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded">
        <div className="flex flex-nowrap sm:mx-8 mx-4">
          {listMovies?.length > 0 && (listMovies.map((item) => {
            return(
              <SubCardComponent movies={item} type={type} key={item.id}/>
            )
          }))}
        </div>
      </div>
    </>
  ) ;
};

export default HorizontalCardComponent;

// {listMovies?.length > 0 && (


