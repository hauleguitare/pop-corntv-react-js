import * as React from 'react';

interface IUserScoreWrapperProps {
    className?: string
    children?: React.ReactNode
}

const UserScoreWrapper: React.FunctionComponent<IUserScoreWrapperProps> = (props) => {
    const {children, className} = props;
  return (
    <div className={className}>
        {children ? (children) : (
            <div className='absolute inset-0 bg-stone-400 animate-pulse rounded-lg shadow-xl'></div>
        )}
    </div>
  );
};

export default UserScoreWrapper;
