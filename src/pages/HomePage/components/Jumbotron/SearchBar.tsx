import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';


const SeacrhBarComponent: React.FunctionComponent = () => {
    const [isShowSearchBar, setShowSearchBar] = useState<boolean>(false);

    const handleOnClickSearch = () => {
        setShowSearchBar(!isShowSearchBar);
    }

    useEffect(() => {
        const FindElementSearch = () =>{
            try{
                const ElementSearch = document.getElementById('search_bar_input');
                if (ElementSearch !== null)
                {
                    ElementSearch.classList.toggle('active_search_bar_input');
                }
            }catch(e)
            {
                console.log('ERROR: ',e);
            }
        };
        FindElementSearch();
    }, [isShowSearchBar]);

  return (
    <div className='flex pt-4'>
        <div id='search_bar_input' className='relative flex w-[64px] h-[48px] sm:h-[64px] rounded-full bg-white shadow-lg duration-500'>
            <button id='icon_search_bar_btn' className='absolute top-0 bottom-0 left-4 z-20 duration-300' onClick={handleOnClickSearch}>
                {(isShowSearchBar === false) ? (<BsSearch size={'30px'}/>) : (<AiOutlineClose size={'30px'}/>)}
            </button>
            <form id='show_form_search_bar' className='hidden w-full relative z-10'>
                <label htmlFor='search'>
                    <input type="text" className='w-full h-full rounded-full pl-16 pr-20 text-sm sm:text-xl' placeholder='search more movies...'/>
                </label>
                <button id='btn_search_bar_movies' className='hidden absolute top-0 right-0 bottom-full w-[84px] h-full rounded-full group 
                        hover:from-slate-200 hover:to-neutral-200 bg-gradient-to-tr from-slate-800 to-stone-700 transition-colors ease-out duration-300'>
                    <span className='font-["Merriweather"] text-white group-hover:text-black'>SEARCH</span>
                </button>
            </form>
        </div>
    </div>
   );
};

export default SeacrhBarComponent;
