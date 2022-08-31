import * as React from 'react';
import { Link } from 'react-router-dom';

interface ILogoComponentProps {
    title: string
}

const LogoComponent: React.FunctionComponent<ILogoComponentProps> = (props) => {
    const {title} = props;
  return (
    <Link to="/" className='text-yellow-400/80 text-3xl font-["Teko"] font-bold block pt-2'>
        <span className='hover:text-gray-400 transition-all ease-in-out duration-200'>{title}</span>
    </Link>
  );
};

export default LogoComponent;
