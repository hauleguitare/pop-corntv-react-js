import React, { useEffect, useState } from 'react';
import {HiOutlineMenuAlt2} from 'react-icons/hi';
import LoginRegisterComponent from './Components/LoginRegister';
import LogoComponent from './Components/Logo';
import MenuContainerComponent from './Components/MenuContainer';
import MenuContainerResponsiveComponent from './Components/MenuContainer/Responsive';
import SearchBarComponent from './Components/SearchBar';
import { ISubMenuComponentProps } from './Components/SubMenu';


const dataMenu: Array<ISubMenuComponentProps> = [
    {
        title: 'Movies',
        list_submenu: [
            {
                title: 'Top rated',
                url: '#'
            },
            {
                title: 'Up Coming',
                url: '#'
            },
            {
                title: 'Now playing',
                url: '#'
            },
            {
                title: 'Popular',
                url: '#'
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

const NavBarComponent: React.FunctionComponent = () => {
  return (
      <nav className='sticky top-0 z-40 backdrop-blur-md bg-stone-700/30 duration-200 text-white'>
        <div className='container flex items-center justify-center w-screen  h-16 sticky top-0 z-100'>
            <div className="mx-4 md:px-0 container flex justify-between items-center relative">
                <div className='flex flex-row gap-4'>
                    <LogoComponent title='POPCORNTV'/>
                    <MenuContainerComponent data={dataMenu}/>
                </div>

                <div className='hidden md:flex gap-4 items-center'>
                    <SearchBarComponent/>
                    <LoginRegisterComponent/>
                </div>

                <div className='block md:hidden'>
                    <MenuContainerResponsiveComponent data={dataMenu}/>
                </div>
            </div>
        </div>
      </nav>
  );
};

export default NavBarComponent;






