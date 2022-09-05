import * as React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface IProgessBarCircleProps {
    value: number,
    className?: string
}

const ProgessBarCircle: React.FunctionComponent<IProgessBarCircleProps> = (props) => {
    const {value, className} = props;
    const percentage = Math.round(value*10);
  return (
        <div className={className}>
            <CircularProgressbarWithChildren maxValue={10} value={value} strokeWidth={8} background={true} backgroundPadding={6}
            styles={buildStyles({
                textSize: '28px',
                strokeLinecap: 'rounded',
                pathTransitionDuration: 0.5,
                backgroundColor: '#001b0a',
                textColor: 'white',
                trailColor: '#092f36',
                pathColor: '#008c03',
            })}
            >
                <span className='text-xl font-["Poppins"] font-bold'>{percentage}%</span>
            </CircularProgressbarWithChildren>
        </div>
  );
};

export default ProgessBarCircle;
