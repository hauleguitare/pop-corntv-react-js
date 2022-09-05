import * as React from 'react';
import ReferenceCategoryComponent from './ReferenceCategory';

interface IReferenceCategoryContainerProps {
    className?: string
}

const ReferenceCategoryContainer: React.FunctionComponent<IReferenceCategoryContainerProps> = (props) => {
    const {className} = props;
  return (
    <ul className={className}>
        <ReferenceCategoryComponent id='12' name='PHIM HÀNH ĐỘNG' />
        <ReferenceCategoryComponent id='12' name='PHIM HÀI' />
        <ReferenceCategoryComponent id='12' name='PHIM PHIÊU LƯU' />
        
  </ul>
  );
};

export default ReferenceCategoryContainer;
