import * as React from 'react';

interface IBannerMovieComponentProps {
    url?: string,
    path?: string | null,
}


const BannerMovieComponent: React.FunctionComponent<IBannerMovieComponentProps> = (props) => {
    const {url, path} = props;
  return (
      <img src={`${url}${path}`} className='h-full w-full object-cover absolute inset-0'/>
  );
};


export default BannerMovieComponent;
