import React, { useState } from 'react';
import {FaPlay} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IDetailMovieBase } from '../../../../Api/interface';
import LayzyLoadImg from '../../../../common/components/UI/LazyLoadImg';
import PlaceHolderImgComponent from '../../../../common/components/UI/PlaceHolderImg';
import { ParseURLWithTitle } from '../../../../constant/Functions';

interface IListMovieComponentProps {
  listMovie: Array<IDetailMovieBase>;
  type: string
}

const ListMoviesComponent: React.FunctionComponent<IListMovieComponentProps> = (props) => {
    const {listMovie, type} = props;
    const primary = listMovie[0];
    const listSubMovies = listMovie.slice(1);
  return (
      <>
      {(listMovie?.length > 0) && (
      <>
        {/* //* PRIMARY */}
        <li className='relative row-span-full col-span-full sm:row-span-2 sm:col-span-2 group bg-white overflow-hidden'>
        <Link to={`/${type}/${ParseURLWithTitle(primary.id, (primary.title) ? (primary.title) : (primary.name))}`} className='absolute flex justify-center items-center z-10 inset-0 opacity-0 hover:opacity-100 backdrop-blur-sm bg-black/10 transition-all ease-out duration-300'>
                <FaPlay size={'80px'} color='gray' className='opacity-50 hover:opacity-100 transition-all ease-in duration-150'/>
            </Link>
            <div className='absolute inset-0 flex flex-col justify-end'>
                <div className='backdrop-blur-xl bg-black/60 text-md sm:text-[1.5rem] py-4 text-center'>
                    <span className='text-white my-4 font-["Lora"]'>{(primary.title !== undefined) ? primary.title : primary.name}</span>
                </div>
            </div>
            <LayzyLoadImg src={`https://image.tmdb.org/t/p/w780${(primary.poster_path !== null) ? primary.poster_path : '/'}`} delay={1000} placeholder={<PlaceHolderImgComponent />} height={850} className='group-hover:scale-125 transition-all ease-in duration-200 w-full object-cover'/>
        </li>
        {/* //? SUB SECONDARY MOVIE */}
        {
            listSubMovies.map((movie) => {
                return(
                <li key={movie.id} className='relative col-span-1 row-span-1 group bg-white overflow-hidden'>
                    <Link to={`/${type}/${ParseURLWithTitle(movie.id, (movie.title) ? (movie.title) : (movie.name))}`} className='absolute flex justify-center items-center z-10 inset-0 opacity-0 hover:opacity-100 backdrop-blur-sm bg-black/10 transition-all ease-in duration-200'>
                        <FaPlay size={'80px'} color='gray' className='opacity-50 hover:opacity-100 transition-all ease-in duration-150'/>
                    </Link>
                    <div className='absolute inset-0 flex flex-col justify-end'>
                        <div className='backdrop-blur-xl bg-black/60 text-sm sm:text-[1.3rem] py-4 text-center'>
                            <span className='text-white my-4 font-["Lora"]'>{(movie.title !== undefined) ? movie.title : movie.name}</span>
                        </div>
                    </div>
                    <LayzyLoadImg src={`https://image.tmdb.org/t/p/w300${(movie.poster_path !== null) ? movie.poster_path : ''}`} delay={1000} placeholder={<PlaceHolderImgComponent />} height={850} className='group-hover:scale-125 transition-all ease-in duration-200 w-full object-cover' />
                </li>
                )
            })
        }
    </>
    )}
      </>
    );
};

export default ListMoviesComponent;
