import * as React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface IViewAllComponentProps {
    LinkTo: string
}

const ViewAllComponent: React.FunctionComponent<IViewAllComponentProps> = (props) => {
    const {LinkTo} = props;
  return (
      <div className='flex items-center'>
        <Link to={LinkTo} className='flex flex-row gap-2 mx-4 group text-sm sm:text-xl'>
            <span className='font-["Lora"] bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out hover:text-red-500'>Xem tất cả</span>
            <BsArrowUpRightCircle className='group-hover:rotate-180 origin-center duration-200 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]'/>
        </Link>
      </div>
  );
};

export default ViewAllComponent;
