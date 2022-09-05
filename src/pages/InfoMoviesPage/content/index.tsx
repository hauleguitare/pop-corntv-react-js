import * as React from 'react';
import BodyContentContainer from '../BodyContent';
import HeaderContentContainer from '../components/container/HeaderContentContainer';

interface IInfoMoviesContentProps {
    MovieId: string,
    type: string
}

const InfoMoviesContent: React.FunctionComponent<IInfoMoviesContentProps> = (props) => {
    const {MovieId, type} = props
  return (
    <div>
        {/* HEADER CONTENT */}
            <HeaderContentContainer/>
        {/* BODY CONTENT */}
            <BodyContentContainer/>
    </div>
        
  );
};

export default InfoMoviesContent;