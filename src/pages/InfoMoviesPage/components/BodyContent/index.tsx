import * as React from 'react';
import { IResponseDetailMovie } from '../../../../Api/Movies/Details';

interface IBodyContentContainerProps {
  data: IResponseDetailMovie
}

const BodyContentContainer: React.FunctionComponent<IBodyContentContainerProps> = (props) => {
  const {data} = props;
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
