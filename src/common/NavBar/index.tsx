import React, { useEffect, useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import {HiOutlineMenuAlt2} from 'react-icons/hi';
import MenuResponsive from './Features/Responsive';




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
                    <a href="#" className='text-yellow-400/80 text-3xl font-["Teko"] font-bold block pt-2'>
                        <span className='hover:text-gray-400 transition-all ease-in-out duration-200'>POPCORNTV</span>
                    </a>
                    <ul className='hidden md:flex flex-row min-h-full items-center gap-4'>
                        <li className=''>
                        <a href="">Movies</a>
                        </li>
                        <li className=''>
                        <a href="">TV Shows</a>
                        </li>
                        <li className=''>
                        <a href="">People</a>
                        </li>
                        <li className=''>
                        <a href="">More</a>
                        </li>
                    </ul>
                </div>
                <div className='hidden md:flex gap-4 items-center'>
                    <div>
                        <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <BsSearch className='h-5 w-5 fill-slate-300" viewBox="0 0 20 20'/>
                        </span>
                        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search movies..." type="text" name="search"/>
                        </label>
                    </div>
                    <a href="#">Login</a>
                </div>
                <button className="block md:hidden" onClick={handleOpenMenu}>
                <HiOutlineMenuAlt2 size={'30px'} className=''/>
                </button>
            </div>
            <MenuResponsive isOpenMenu={isOpenMenu} OnChangeOpenMenu={handleOpenMenu}/>
        </div>
      </nav>
  );
};

export default NavBarComponent;






