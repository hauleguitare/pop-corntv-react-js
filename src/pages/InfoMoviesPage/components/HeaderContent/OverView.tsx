import * as React from 'react';

interface IOverViewComponentProps {
    text: string,
    className?: string
}

const OverViewComponent: React.FunctionComponent<IOverViewComponentProps> = (props) => {
  const {text, className} = props;
    return (
      <span className={className}>{text}</span>
  );
};

export default OverViewComponent;
