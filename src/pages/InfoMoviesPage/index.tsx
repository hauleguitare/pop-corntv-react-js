import * as React from 'react';
import { useParams } from 'react-router-dom';
import { RegexIdFromURL } from '../../constant/Functions';
import InfoMoviesContent from './content';

interface IInfoMoviesPageProps {
}

const InfoMoviesPage: React.FunctionComponent<IInfoMoviesPageProps> = (props) => {
    const {id, type} = useParams();
    if (!id || !type) return null;
    const MovieId = Number.parseInt(RegexIdFromURL(id));
  return (
      <>
      {Number.isInteger(MovieId) && (
        <div>
          <InfoMoviesContent MovieId={MovieId} type={type}/>
        </div>
      )}
      </>
  );
};

export default InfoMoviesPage;
