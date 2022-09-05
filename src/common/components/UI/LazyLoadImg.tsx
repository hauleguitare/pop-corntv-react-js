import * as React from 'react';
import LazyLoad from 'react-lazyload';

interface ILayzyLoadImgProps {
  src: string,
  height: number,
  delay: number,
  className: string,
  placeholder?: any
}

const LayzyLoadImg: React.FunctionComponent<ILayzyLoadImgProps> = (props) => {
  const {src, height, delay, className, placeholder} = props;
  return(
    <div className={className}>
      <LazyLoad height={height} throttle={delay} placeholder={placeholder} scroll={true}>
      <img src={src} />
      </LazyLoad>
    </div>
  );
};

export default LayzyLoadImg;
