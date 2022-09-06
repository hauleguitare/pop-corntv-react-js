import * as React from 'react';
import { Link } from 'react-router-dom';

interface IInfoCreatorComponentProps {
}

const InfoCreatorComponent: React.FunctionComponent<IInfoCreatorComponentProps> = (props) => {
  return (
      <div>
        <Link to='#'>
        <span>Jessica Gao</span>
        </Link>
      </div>
  );
};

export default InfoCreatorComponent;
