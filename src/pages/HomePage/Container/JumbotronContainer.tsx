import * as React from 'react';
import { JumbotronComponent } from '../components';

interface IJumbotronContainerProps {
}

const JumbotronContainer: React.FunctionComponent<IJumbotronContainerProps> = (props) => {
  return (
    <section className='relative flex justify-center h-96'>
        <JumbotronComponent/>
    </section>
  );
};

export default JumbotronContainer;
