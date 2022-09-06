import * as React from 'react';

interface ITitleContentComponentProps {
    title?: string,
    release_date: string,
    className?: string
}

const splitDate = (stringFormat: string,charSplit:string , getType: 'none' | 'year' | 'month' | 'day'): string =>{
    const splitString = stringFormat.split(charSplit);
    switch(getType)
    {
        case 'none': {
            return stringFormat;
        }

        case 'year': {
            return splitString[0];
        }

        case 'month': {
            return splitString[1];
        }

        case 'day': {
            return splitString[2];
        }

        default:{
            return '';
        }
    }
}


const TitleContentComponent: React.FunctionComponent<ITitleContentComponentProps> = (props) => {
    const {title, release_date, className} = props;
    const stringDate = splitDate(release_date,'-' , 'year');
  return (
    <div className={className}>
        <a className='pr-2 hover:bg-black' href='#'>
        <span>{title}</span>
        </a>
        <span className='pl-2'>({stringDate})</span>
  </div>
  );
};

export default TitleContentComponent;
