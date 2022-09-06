import * as React from 'react';

interface IPosterMovieComponentProps {
    url?: string,
    path?: string | null,
}


const PosterMovieComponent: React.FunctionComponent<IPosterMovieComponentProps> = (props) => {
    const {url, path} = props;
  return (
    <>
      <img src={`${url}${path}`} className='rounded-lg shadow-xl'/>
    </>
  );
};

export default PosterMovieComponent;
