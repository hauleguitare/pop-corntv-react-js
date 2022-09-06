import * as React from 'react';

interface IBannerMovieWrapperProps {
    children?: React.ReactNode,
    className?: string
}

const BannerMovieWrapper: React.FunctionComponent<IBannerMovieWrapperProps> = (props) => {
    const {children, className} = props;
  return (
      <div className={className}>
          {children ? (children) : (
          <div className='absolute inset-0 bg-stone-900'></div>
          )}
          <div className='absolute inset-0 backdrop-blur-[2px] bg-stone-900/70 z-0'></div>
      </div>
  );
};

export default BannerMovieWrapper;
