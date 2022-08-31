import * as React from 'react';
import { useNavBarContext } from '../..';
import SubMenuComponent, { ISubMenuComponentProps } from '../SubMenu';


const MenuContainerComponent: React.FunctionComponent = () => {
    const {data} = useNavBarContext();
  return (
    <ul className='hidden md:flex flex-row min-h-full items-center gap-4'>
        {data.map((SubItem) => {
          return(
            <SubMenuComponent title={SubItem.title} list_submenu={SubItem.list_submenu} />
          )
        })}
    </ul>
  );
};

export default MenuContainerComponent;

