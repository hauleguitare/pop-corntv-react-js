import * as React from 'react';

interface IListCategoryComponentProps {
    listCategory: Array<IListCategory>,
    nameType: string,
    displayCustom: string,
    ActiveCategoryClick(activeId: string): void,
    activeId: string
}


interface IListCategory {
    id: number | string,
    name: string
  }
  

const ListCategoryComponent: React.FunctionComponent<IListCategoryComponentProps> = (props) => {
    const {listCategory, displayCustom, nameType, ActiveCategoryClick, activeId} = props;
    const handleOnClick = (event: React.MouseEvent) => {
        ActiveCategoryClick(event.currentTarget.id);
      }
      return (
        <ul className={`${displayCustom} gap-4 font-["Lora"] mx-4`}>
          {listCategory.map((category) => {
            return(
              <li key={`${nameType}-${category.id}`}>
            <button id={`${nameType}-${category.id}`} onClick={handleOnClick} className={`${(activeId === `${nameType}-${category.id}`) ? 'active-button' : ''} bg-black/30 opacity-80 hover:opacity-100 hover:bg-white/30 transition duration-100  rounded-md px-2 py-2 border-black`}>{category.name}</button>
            </li>
            )
          })}
          
        </ul>
      );
};

export default ListCategoryComponent;
