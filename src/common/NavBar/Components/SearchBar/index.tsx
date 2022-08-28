import * as React from 'react';
import { BsSearch } from 'react-icons/bs';

interface ISearchBarComponentProps {
}

const SearchBarComponent: React.FunctionComponent<ISearchBarComponentProps> = (props) => {
  return (
    <div className='text-black'>
        <label className="relative block">
        <button className="absolute inset-y-0 left-0 flex items-center pl-2">
        <BsSearch className='h-5 w-5 fill-slate-300" viewBox="0 0 20 20'/>
        </button>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search movies..." type="search" name="search"/>
        </label>
    </div>
  );
};

export default SearchBarComponent;
