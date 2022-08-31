import * as React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IListSubMenuComponentsProps } from '..';

interface ISubMenuResponsiveComponentProps {
  title: string,
  list_submenu: Array<IListSubMenuComponentsProps>,
  HandleCategoryClick(item: string):void
}




const SubMenuResponsiveComponent: React.FunctionComponent<ISubMenuResponsiveComponentProps> = (props) => {
  const {title, list_submenu, HandleCategoryClick} = props;
  const OnCategoryClick = (item: string, e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault();
    HandleCategoryClick(item);
  }
  return (
  <li className='relative flex flex-col items-center justify-center group' key={`responsive ${title}`} onClick={(event) =>{OnCategoryClick(title, event)}}>
    <a href="#">
        <span className='font-["Lora"] font-[500]'>{title}</span>
    </a>
    <FaArrowAltCircleUp id={`icon_list_${title.toLowerCase().replace(' ', '')}`} size={'30px'} className='absolute top-1 right-[10%] transition-all ease-linear duration-200'/>
    <div className="py-4">
      <ul id={`list_${title.toLowerCase().replace(' ', '')}`} className='overflow-hidden hidden font-["Lora"] text-[15px] px-6 items-center justify-center flex-col duration-300'>
        {list_submenu.map((subItem) => {
          return(
            <li key={`responsive SubMenu ${subItem.title}`}>
              <Link to={subItem.url}>
                <span>
                  {subItem.title}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </li>
  );
};

export default SubMenuResponsiveComponent;
