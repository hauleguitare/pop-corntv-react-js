export const ParseURLWithTitle = (id: string | number, title: string | undefined):string =>{
    if(title === undefined)
    {
        return '';
    }else{
        const stringReplace = title.replace(/[^\w\s]/gi, '');
        const newArr = stringReplace.toLocaleLowerCase().split(' ');
        newArr.push(`poptv${id.toString()}`);
        return(newArr.join('-'));
    }
}

export const RegexIdFromURL = (url: string): string =>{
     const arr = url.split('-');
     const idx = arr[arr.length-1];
     const id = idx.replace(/[^0-9]/gi, '');
     return id;
}