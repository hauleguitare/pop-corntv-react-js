import * as React from 'react';

interface IReferenceCategoryComponentProps {
    name: string,
    id: string
}

const ReferenceCategoryComponent: React.FunctionComponent<IReferenceCategoryComponentProps> = (props) => {
    const {name, id} = props;
  return (
    <li>
        <a href={id}>
        <span>{name}</span>
        </a>
    </li>
  );
};

export default ReferenceCategoryComponent;
