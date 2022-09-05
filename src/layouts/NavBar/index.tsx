import React from 'react';
import LoginRegisterComponent from './Components/LoginRegister';
import LogoComponent from './Components/Logo';
import MenuComponent from './Components/MenuContainer';
import MenuResponsiveComponent from './Components/MenuContainer/Responsive';
import SearchBarComponent from './Components/SearchBar';
import { ISubMenuComponentProps } from './Components/SubMenu';
import { createContext, useContext } from 'react';


const dataMenu: Array<ISubMenuComponentProps> = [
    {
        title: 'Movies',
        id: 'movie',
        list_submenu: [
            {
                title: 'Top rated',
                url: 'list/top-rated'
            },
            {
                title: 'Up Coming',
                url: 'list/up-comming'
            },
            {
                title: 'Now playing',
                url: 'list/now-playing'
            },
            {
                title: 'Popular',
                url: 'list/popular'
            }
        ]
    },

    {
        title: 'Tv Show',
        id: 'tv',
        list_submenu: [
            {
                title: 'Popular',
                url: 'list/popular'
            },
            {
                title: 'Airing Today',
                url: 'list/airing-today'
            },
            {
                title: 'On TV',
                url: 'list/on-tv'
            },
            {
                title: 'Top Rated',
                url: 'top-rated'
            }
        ]
    },
    {
        title: 'People',
        id: 'people',
        list_submenu: [
            {
                title: 'People Popular',
                url: 'list/people-popular'
            }
        ]
    },
    {
        title: 'More',
        id: 'more',
        list_submenu: [
            {
                title: 'Disscusions',
                url: 'disscusions'
            },
            {
                title: 'LeaderBoard',
                url: 'leaderboard'
            },
            {
                title: 'Support',
                url: 'support'
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
                        <MenuComponent/>
                    </div>

                    <div className='hidden md:flex gap-4 items-center'>
                        <SearchBarComponent/>
                        <LoginRegisterComponent/>
                    </div>

                    <div className='block md:hidden'>
                        <MenuResponsiveComponent/>
                    </div>
                </NavBarContext.Provider>
            </nav>
        </div>
      </header>
  );
};

export default NavBarComponent;






