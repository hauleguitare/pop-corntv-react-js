import * as React from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IResultsListTrending } from '../../../../Api/Movies/ListTrending';

interface ISubCardComponentProps {
  movies: IResultsListTrending,
  type: string,
}

const SubCardComponent: React.FunctionComponent<ISubCardComponentProps> = (props) => {
  const {movies, type} = props;
  return (
    <li className="inline-block px-3">
        <div className="relative w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <Link to={`/${type}/${movies.id}`} className='group absolute inset-0 flex items-center justify-center z-10'>
                <div className='hidden group-hover:block'>
                  <AiFillPlayCircle size={'60px'} color={'gray'} className='opacity-60 hover:opacity-100 hover:scale-110 transition-all ease-in duration-150'/>
                </div>
            </Link>
            <div className='absolute bottom-0 left-0 right-0 py-4 px-2 backdrop-blur-xl bg-black/30 text-left'>
                <span className='text-sm sm:text-[1rem]'>{(movies.title !== undefined) ? (movies.title) : (movies.name)}</span>
            </div>
            <img src={`https://image.tmdb.org/t/p/w300${(movies.poster_path !== null) ? movies.poster_path : '/'}`} className='object-cover'/>
        </div>
    </li>
  );
};

export default SubCardComponent;
