import React, { useEffect, useState } from 'react';
import {HiOutlineMenuAlt2} from 'react-icons/hi';
import LoginRegisterComponent from './Components/LoginRegister';
import LogoComponent from './Components/Logo';
import MenuContainerComponent from './Components/MenuContainer';
import SearchBarComponent from './Components/SearchBar';
import SubMenuComponent, { ISubMenuComponentProps } from './Components/SubMenu';
import MenuResponsive from './Features/Responsive';


const Movies: ISubMenuComponentProps = {
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
};

const TvShow: ISubMenuComponentProps = {
    title: 'Tv Show',
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
};

const People: ISubMenuComponentProps = {
    title: 'People',
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
};


const More: ISubMenuComponentProps = {
    title: 'More',
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
};






const NavBarComponent: React.FunctionComponent = () => {
    const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

    useEffect(() => {
        const element = document.getElementById('body_content');
        if (element !== null)
        {
            if (isOpenMenu)
            {
                element.classList.add('overflow-hidden');
            }else{
                element.classList.remove('overflow-hidden');
            }
        }else{
            return;
        }
    }, [isOpenMenu])


    // Function HandleOpenMenu
    const handleOpenMenu = (e: React.MouseEvent<HTMLElement>): void =>{
        if (e.type === 'click')
        {
            setOpenMenu(!isOpenMenu);
        }
    }

  return (
      <nav className='sticky top-0 z-40 backdrop-blur-md bg-stone-700/30 duration-200 text-white'>
        <div className='container flex items-center justify-center w-screen  h-16 sticky top-0 z-100'>
            <div className="mx-4 md:px-0 container flex justify-between items-center relative">
                <div className='flex flex-row gap-4'>
                    <LogoComponent title='POPCORNTV'/>
                    <MenuContainerComponent>
                        <SubMenuComponent title={Movies.title} list_submenu={Movies.list_submenu}/>
                        <SubMenuComponent title={TvShow.title} list_submenu={Movies.list_submenu}/>
                        <SubMenuComponent title={People.title} list_submenu={Movies.list_submenu}/>
                        <SubMenuComponent title={More.title} list_submenu={Movies.list_submenu}/>
                    </MenuContainerComponent>
                </div>
                <div className='hidden md:flex gap-4 items-center'>
                    <SearchBarComponent/>
                    <LoginRegisterComponent/>
                </div>
                <button className="block md:hidden" onClick={handleOpenMenu}>
                <HiOutlineMenuAlt2 size={'30px'} className=''/>
                </button>
                <MenuResponsive isOpenMenu={isOpenMenu} OnChangeOpenMenu={handleOpenMenu}/>
            </div>
        </div>
      </nav>
  );
};

export default NavBarComponent;






