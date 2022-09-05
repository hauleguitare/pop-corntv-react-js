import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ISubMenuComponentProps {
  title: string,
  id: string | number,
  list_submenu: Array<IListSubMenuComponentsProps>,
}

export interface IListSubMenuComponentsProps {
  title: string,
  url: string,
}

const SubMenuComponent: React.FunctionComponent<ISubMenuComponentProps> = (props) => {
  const {title, list_submenu, id} = props;
  return (
  <li className='relative'>
    <a href="#" className='peer hover:text-black py-4'>
      <span>{title}</span>
    </a>
    <nav className='invisible peer-hover:visible hover:visible absolute top-[26px] left-[-0.3rem] w-[180px] bg-white rounded-md'>
      <ul className='hidden sm:flex flex-col mx-4 my-4 gap-2'>
        {list_submenu.map((subItem) => {
          return(
            <li key={`standard_SubMenu_${subItem.title}`} className='group'>
              <Link to={`${id}/${subItem.url}`}>
                <span className='text-black group-hover:text-red-700'>{subItem.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  </li>
  );
};

export default SubMenuComponent;
