import * as React from 'react';

export interface ISubMenuComponentProps {
  title: string,
  list_submenu: Array<IListSubMenuComponentsProps>,
}

export interface IListSubMenuComponentsProps {
  title: string,
  url: string,
}

const SubMenuComponent: React.FunctionComponent<ISubMenuComponentProps> = (props) => {
  const {title, list_submenu} = props;
  return (
  <li className='relative' key={`standard ${title}`}>
    <a href="#" className='peer hover:text-black py-4'>
      <span>{title}</span>
    </a>
    <div className='invisible peer-hover:visible hover:visible absolute top-[26px] left-[-0.3rem] w-[180px] bg-white rounded-md'>
      <ul className='hidden sm:flex flex-col mx-4 my-4 gap-2'>
        {list_submenu.map((subItem) => {
          return(
            <li key={`standard SubMenu ${subItem.title}`} className='group'>
              <a href={subItem.url}>
                <span className='text-black group-hover:text-red-700'>{subItem.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  </li>
  );
};

export default SubMenuComponent;
