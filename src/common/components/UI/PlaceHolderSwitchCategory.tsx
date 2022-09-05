import * as React from 'react';


const PlaceHolderSwitchCategoryComponent: React.FunctionComponent = () => {
  return (
    <div className='absolute inset-0 flex justify-center items-center backdrop-blur-sm z-10'>
        <div className='w-8 h-8 bg-white animate-ping backdrop-blur-sm duration-300 rounded-sm'></div>
    </div>
  );
};

export default PlaceHolderSwitchCategoryComponent;
