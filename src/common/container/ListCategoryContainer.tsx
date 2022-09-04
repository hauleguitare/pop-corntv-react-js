import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ActionActiveCategory from '../../action/ActiveCategory';
import { IResultCategory } from '../../Api/Category';
import ListCategoryComponent from '../components/ListCategory';

interface IListCategoryContainerProps {
    listCategory: IResultCategory[],
    type: string,
    displayCustom: string,
    DefaultActiveId?: string
}

const ListCategoryContainer: React.FunctionComponent<IListCategoryContainerProps> = (props) => {
    const {listCategory, type, displayCustom, DefaultActiveId} = props;
    const dispatch = useDispatch();
    const ActionCreator = new ActionActiveCategory(type);
    const [activeId, setActiveId] = useState<string>(() =>{
        return(DefaultActiveId ? DefaultActiveId : '')
    });
    const handleOnClick = (activeId: string) =>{
        setActiveId(activeId);
        const payload = {
            name: type,
            id: activeId
        }
        const action = ActionCreator.UpdateActiveId(payload);
        dispatch(action);
        console.log("Action : ", action);
        }
  return (
      <ListCategoryComponent ActiveCategoryClick={handleOnClick} activeId={activeId} nameType={type} listCategory={listCategory} displayCustom={displayCustom}/>
  );
};

export default ListCategoryContainer;
