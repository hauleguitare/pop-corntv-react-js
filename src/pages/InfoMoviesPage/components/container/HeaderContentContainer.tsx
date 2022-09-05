import * as React from 'react';
import HeaderContentComponent from '../HeaderContent';

interface IHeaderContentContainerProps {
}

const HeaderContentContainer: React.FunctionComponent<IHeaderContentContainerProps> = (props) => {
  return (
    <HeaderContentComponent/>
  );
};

export default HeaderContentContainer;
