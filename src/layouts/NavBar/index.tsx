import React from 'react';
import LoginRegisterComponent from './Components/LoginRegister';
import LogoComponent from './Components/Logo';
import MenuContainerComponent from './Components/MenuContainer';
import MenuContainerResponsiveComponent from './Components/MenuContainer/Responsive';
import SearchBarComponent from './Components/SearchBar';
import { ISubMenuComponentProps } from './Components/SubMenu';
import { createContext, useContext } from 'react';


const dataMenu: Array<ISubMenuComponentProps> = [
    {
        title: 'Movies',
        list_submenu: [
            {
                title: 'Top rated',
                url: 'abc'
            },
            {
                title: 'Up Coming',
                url: 'test'
            },
            {
                title: 'Now playing',
                url: 'test'
            },
            {
                title: 'Popular',
                url: 'test'
            }
        ]
    },

    {
        title: 'Tv Show',
        list_submenu: [
            {
                title: 'Popular',
                url: '#'
            },
            {
                title: 'Airing Today',
                url: '#'
            },
            {
                title: 'On TV',
                url: '#'
            },
            {
                title: 'Top Rated',
                url: '#'
            }
        ]
    },
    {
        title: 'People',
        list_submenu: [
            {
                title: 'People Popular',
                url: '#'
            }
        ]
    },
    {
        title: 'More',
        list_submenu: [
            {
                title: 'Disscusions',
                url: '#'
            },
            {
                title: 'LeaderBoard',
                url: '#'
            },
            {
                title: 'Support',
                url: '#'
            }
        ]
    }
];

//? EXPORT TYPE useContext
export interface INavBarContext{
    data: Array<ISubMenuComponentProps>
}

// export const GlobalContext
const NavBarContext = createContext<INavBarContext>({
    data: dataMenu
})
export const useNavBarContext = () => useContext(NavBarContext);

const NavBarComponent: React.FunctionComponent = () => {

  return (
      <header className='fixed top-0 left-0 right-0 bottom[var(--height-navbar)] z-40 backdrop-blur-md bg-stone-700/30 duration-200 text-white'>
        <div className='container flex items-center justify-center w-screen  h-16 sticky top-0 z-100'>
            <nav className="mx-4 md:px-0 container flex justify-between items-center relative">
                <NavBarContext.Provider value={{data: dataMenu}}>
                    <div className='flex flex-row gap-4'>
                        <LogoComponent title='POPCORNTV'/>
                        <MenuContainerComponent/>
                    </div>

                    <div className='hidden md:flex gap-4 items-center'>
                        <SearchBarComponent/>
                        <LoginRegisterComponent/>
                    </div>

                    <div className='block md:hidden'>
                        <MenuContainerResponsiveComponent/>
                    </div>
                </NavBarContext.Provider>
            </nav>
        </div>
      </header>
  );
};

export default NavBarComponent;






