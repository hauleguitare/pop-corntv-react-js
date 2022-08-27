import * as React from 'react';
import {FaPlay} from 'react-icons/fa';



export interface IListConcreteMovieState {
  href: string,
  title: string,
  img: string | undefined,
}

interface IConcreteMovieProps {
  primary: IListConcreteMovieState,
  listSubMovie: Array<IListConcreteMovieState>
}

const ListConcreteMoviesComponent: React.FunctionComponent<IConcreteMovieProps> = (props) => {
  const {primary, listSubMovie} = props;
  return (
    <ul className='grid grid-flow-row grid-cols-2 sm:grid-cols-5 sm:grid-rows-3 sm:grid-flow-col gap-4 relative'>
        {/* //* PRIMARY */}
        <li className='relative row-span-full col-span-full sm:row-span-2 sm:col-span-2 group bg-white overflow-hidden'>
            <a href={primary.href} className='absolute flex justify-center items-center z-10 inset-0 opacity-0 hover:opacity-100 backdrop-blur-sm bg-black/10 transition-all ease-out duration-300'>
                <FaPlay size={'80px'} color='gray' className='opacity-50 hover:opacity-100 transition-all ease-in duration-150'/>
            </a>
            <div className='absolute inset-0 flex flex-col justify-end'>
                <div className='backdrop-blur-sm bg-dark/30 text-md sm:text-xl'>
                    <h1 className='text-white mx-4 my-4 font-["Lora"]'>{primary.title}</h1>
                </div>
            </div>
            <img src={primary.img} className='group-hover:scale-125 transition-all ease-in duration-200 w-full sm:h-full object-cover'/>
        </li>
        {/* //? SUB SECONDARY MOVIE */}
        {
            listSubMovie.map((movie) => {
                return(
                <li key={movie.title} className='relative col-span-1 group bg-white overflow-hidden'>
                    <a href={movie.href} className='absolute flex justify-center items-center z-10 inset-0 opacity-0 hover:opacity-100 backdrop-blur-sm bg-black/10 transition-all ease-in duration-200'>
                        <FaPlay size={'80px'} color='gray' className='opacity-50 hover:opacity-100 transition-all ease-in duration-150'/>
                    </a>
                    <div className='absolute inset-0 flex flex-col justify-end'>
                        <div className='backdrop-blur-sm bg-black/30 text-md sm:text-xl'>
                            <h1 className='text-white mx-4 my-4 font-["Lora"] text-md sm:text-xl'>{movie.title}</h1>
                        </div>
                    </div>
                    <img src={movie.img} className='group-hover:scale-125 transition-all ease-in duration-200 w-full sm:h-auto' />
                </li>
                )
            })
        }
    </ul>
    );
};

export default ListConcreteMoviesComponent;
