import * as React from 'react';

interface IOverViewComponentProps {
    text: string
}

const OverViewComponent: React.FunctionComponent<IOverViewComponentProps> = (props) => {
  const {text} = props;
    return (
      <span>{text}</span>
  );
};

export default OverViewComponent;
