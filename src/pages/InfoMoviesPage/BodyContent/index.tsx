import * as React from 'react';

interface IBodyContentContainerProps {
}

const BodyContentContainer: React.FunctionComponent<IBodyContentContainerProps> = (props) => {
  return (
    <div className=''>
        <div className='text-white'>SERIES CAST</div>
        <div className='text-white'>SEASONS FOR TV SHOW</div>
        <div className='text-white'>COLLECTION</div>
        <div className='text-white'>SOCIAL</div>
        <div className='text-white'>MEDIA</div>
        <div className='text-white'>Recommendations</div>
    </div>
  );
};

export default BodyContentContainer;
