import React, { useState } from 'react';
import { IResultCategory } from '../../Api/Category';
import ListCategoryComponent from '../components/ListCategory';

interface IListCategoryContainerProps {
    callbackActiveId(activeId: string): void,
    listCategory: IResultCategory[],
    type: string,
    displayCustom: string
}

const ListCategoryContainer: React.FunctionComponent<IListCategoryContainerProps> = (props) => {
    const {callbackActiveId, listCategory, type, displayCustom} = props;
    const [activeId, setActiveId] = useState<string>('');
    const handleOnClick = (activeId: string) =>{
        setActiveId(activeId);
        callbackActiveId(activeId);
      }
  return (
      <ListCategoryComponent ActiveCategoryClick={handleOnClick} activeId={activeId} nameType={type} listCategory={listCategory} displayCustom={displayCustom}/>
  );
};

export default ListCategoryContainer;
