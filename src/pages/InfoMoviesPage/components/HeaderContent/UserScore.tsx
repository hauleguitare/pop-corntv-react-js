import * as React from 'react';
import ProgessBarCircle from './ProgessBarCircle';
import {FaThList, FaHeart, FaTags, FaStar} from 'react-icons/fa';

interface IUserScoreComponentProps {
  percentage: number
}

const UserScoreComponent: React.FunctionComponent<IUserScoreComponentProps> = (props) => {
  const {percentage} = props
  return (
      <>
        <ProgessBarCircle value={percentage} className='max-h-[80px] max-w-[80px] shadow-xl rounded-full cursor-pointer hover:scale-125 duration-300 delay-150'/>
        <ul className='flex flex-row gap-4'>
          <li>
            <button className='bg-stone-800 rounded-full h-[50px] w-[50px] flex items-center justify-center group'>
              <FaThList size={'30px'} fill={'gray'} className='group-hover:fill-white'/>
            </button>
          </li>
          <li>
            <button className='bg-stone-800 rounded-full h-[50px] w-[50px] flex items-center justify-center group'>
            <FaHeart size={'30px'} fill={'gray'} className='group-hover:fill-red-500'/>
            </button>
          </li>
          <li>
            <button className='bg-stone-800 rounded-full h-[50px] w-[50px] flex items-center justify-center group'>
              <FaTags size={'30px'} fill={'gray'} className='group-hover:fill-sky-700'/>
            </button>
          </li>
          <li>
            <button className='bg-stone-800 rounded-full h-[50px] w-[50px] flex items-center justify-center group'>
              <FaStar size={'30px'} fill={'gray'} className='group-hover:fill-yellow-500'/>
            </button>
          </li>
        </ul>
      </>
  );
};

export default UserScoreComponent;
