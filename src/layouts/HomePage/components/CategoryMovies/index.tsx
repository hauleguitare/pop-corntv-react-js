import * as React from 'react';

interface ICategoryMovies{
  listCategory: Array<string>,
}

const CategoryMoviesComponent: React.FunctionComponent<ICategoryMovies> = (props) => {
  const {listCategory} = props;

  return (
   
    <ul className='flex flex-wrap sm:flex-nowrap sm:flex-row justify-start gap-4 text-md sm:text-xl font-["Lora"] mx-2 mb-4'>
      {listCategory.map((category) => {
        return(
          <li key={category}>
        <button className='bg-black/30 opacity-80 hover:opacity-100 hover:bg-white/30 transition duration-100  rounded-md px-2 py-2 border-black'>{category}</button>
        </li>
        )
      })}
      
    </ul>
  );
};

export default CategoryMoviesComponent;
