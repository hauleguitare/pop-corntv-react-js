import * as React from 'react';

interface IMenuContainerComponentProps {
    children: React.ReactNode,
}

const MenuContainerComponent: React.FunctionComponent<IMenuContainerComponentProps> = (props) => {
    const {children} = props;
  return (
    <ul className='hidden md:flex flex-row min-h-full items-center gap-4'>
        {children}
    </ul>
  );
};

export default MenuContainerComponent;

