import * as React from 'react';
import SubMenuComponent, { ISubMenuComponentProps } from '../SubMenu';

interface IMenuContainerComponentProps {
  data: Array<ISubMenuComponentProps>
}

const MenuContainerComponent: React.FunctionComponent<IMenuContainerComponentProps> = (props) => {
    const {data} = props;
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

