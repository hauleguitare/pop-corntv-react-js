import * as React from 'react';
import { IObjectIDBase } from '../../../Api/interface';
import ReferenceCategoryComponent from '../components/HeaderContent/ReferenceCategory';

interface IReferenceCategoryContainerProps {
    className?: string,
    listCategory: IObjectIDBase[]
}

const ReferenceCategoryContainer: React.FunctionComponent<IReferenceCategoryContainerProps> = (props) => {
    const {className, listCategory} = props;
  return (
    <ul className={className}>
      {listCategory.map((item) =>{
        return(
          <ReferenceCategoryComponent id={item.id} name={item.name} key={item.id}/>
        )
      })}
      
      {/* <ReferenceCategoryComponent id='12' name='PHIM HÀI' />
      <ReferenceCategoryComponent id='12' name='PHIM PHIÊU LƯU' /> */}
  </ul>
  );
};

export default ReferenceCategoryContainer;
