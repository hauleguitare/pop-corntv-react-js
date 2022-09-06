import * as React from 'react';

interface IOverviewWrapperProps {
    children?: React.ReactNode,
    className?: string
}

const OverviewWrapper: React.FunctionComponent<IOverviewWrapperProps> = (props) => {
    const {children, className} = props;
  return (
    <div className={className}>
        {children ? (children) : (
            <div className='absolute inset-0 bg-stone-400 animate-pulse rounded-lg shadow-xl'></div>
        )}
    </div>
  );
};

export default OverviewWrapper;
