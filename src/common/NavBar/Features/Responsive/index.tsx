import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

interface IMenuResponsive{
    isOpenMenu : boolean,
    OnChangeOpenMenu(event: React.MouseEvent<HTMLElement>): void,
}

interface ICatetoryClick{
    list_movies: boolean,
    list_tvshow: boolean,
    list_people: boolean,
    list_more: boolean
}


const MenuResponsive: React.FunctionComponent<IMenuResponsive> = (props) =>{
    const {isOpenMenu, OnChangeOpenMenu} = props;
    const ArrayCatetory: Array<string> = ['Movies', 'TV Show', 'People', 'More'];
    const [isClickCatetory, setClickCatetory] = useState<ICatetoryClick>(
        {
            list_movies : false,
            list_tvshow: false,
            list_people: false,
            list_more: false
        }
    );
    // Handle Catetory Click
    const HandleCatetoryClick = (item: string) =>{
        const keyItem = `list_${item.toLowerCase().replace(' ', '')}`;
        (Object.keys(isClickCatetory) as (keyof typeof isClickCatetory)[]).find((key) =>{
            try{
                if (keyItem === key)
                {
                    setClickCatetory({
                        ...isClickCatetory,
                        [key]: !isClickCatetory[key]
                    })
                }
            }catch(e)
            {
                console.log(e);
            }
        })

    }
    useEffect(() =>{
        (Object.keys(isClickCatetory) as (keyof typeof isClickCatetory)[]).find((key) => {
            try{
                const ElementId = document.getElementById(key);
                if (ElementId === null)
                {
                    return
                }else{
                    const ElementIcon = document.getElementById(`icon_${key}`);
                    if (isClickCatetory[key])
                    {
                        ElementId.classList.replace('hidden', 'flex');
                        if (ElementIcon !== null)
                        {
                            ElementIcon.classList.add('rotate-180');
                        }
                    }else{
                        ElementId.classList.replace('flex', 'hidden');
                        if (ElementIcon !== null)
                        {
                            ElementIcon.classList.remove('rotate-180');
                        }
                    }
                }
            }catch(e)
            {
                console.log("Error: ", e);
            }
        })
        


    },[isClickCatetory])

    return(
        <div className={
        `md:hidden fixed top-0 h-full w-full duration-500 ${isOpenMenu ? 'right-0' : 'right-[-100%]'} z-30`
        }>
            {isOpenMenu && (
                <div className='fixed top-0 h-screen w-full bg-stone-700/40 backdrop-blur-2xl'></div>
            )}
            <nav className='block h-screen w-3/4 overflow-y-auto px-6 py-6 ml-auto z-10 relative bg-white text-black'>
                <button className='absolute top-2 left-2' onClick={OnChangeOpenMenu}>
                    <AiOutlineClose size={'20px'}/>
                </button>
                <ul className='text-3xl flex gap-4 flex-col'>
                    {ArrayCatetory.map((item) => {
                        return(
                            <>
                                <li className='relative flex flex-row items-center gap-4 justify-center group' key={item} onClick={() =>{HandleCatetoryClick(item)}}>
                                <span className='font-["Lora"] font-[500]'>{item}</span>
                                <FaArrowAltCircleUp id={`icon_list_${item.toLowerCase().replace(' ', '')}`} size={'30px'} className='transition-all ease-linear duration-200'/>
                                </li>
                                <ul id={`list_${item.toLowerCase().replace(' ', '')}`} className='overflow-hidden hidden font-["Lora"] text-[15px] px-6 items-center justify-center flex-col duration-300'>
                                    <a>
                                        <li>
                                            Popular
                                        </li>
                                    </a>

                                    <a>
                                        <li>
                                            Top Rated
                                        </li>
                                    </a>

                                    <a>
                                        <li>
                                            Upcoming
                                        </li>
                                    </a>

                                    <a>
                                        <li>
                                            Now Playing
                                        </li>
                                    </a>
                                </ul>
                            </>
                        )
                    })}
                </ul>
            </nav>
            
        </div>
    )
}
export default MenuResponsive;