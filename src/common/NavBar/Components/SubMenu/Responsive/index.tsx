import * as React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { IListSubMenuComponentsProps } from '..';

interface ISubMenuResponsiveComponentProps {
  title: string,
  list_submenu: Array<IListSubMenuComponentsProps>,
  HandleCategoryClick(item: string):void
}

const SubMenuResponsiveComponent: React.FunctionComponent<ISubMenuResponsiveComponentProps> = (props) => {
  const {title, list_submenu, HandleCategoryClick} = props;
  const OnCategoryClick = (item: string) =>{
    HandleCategoryClick(item);
  }
  return (
  <li className='relative flex flex-col items-center gap-4 justify-center group' key={`responsive ${title}`} onClick={() =>{OnCategoryClick(title)}}>
    <a href="#">
        <span className='font-["Lora"] font-[500]'>{title}</span>
    </a>
    <FaArrowAltCircleUp id={`icon_list_${title.toLowerCase().replace(' ', '')}`} size={'30px'} className='absolute top-1 right-[10%] transition-all ease-linear duration-200'/>
    <div className="">
      <ul id={`list_${title.toLowerCase().replace(' ', '')}`} className='overflow-hidden hidden font-["Lora"] text-[15px] px-6 items-center justify-center flex-col duration-300'>
        {list_submenu.map((subItem) => {
          return(
            <li key={`responsive SubMenu ${subItem.title}`} className='group'>
              <a href={subItem.url}>
                <span>
                  {subItem.title}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  </li>
  );
};

export default SubMenuResponsiveComponent;
