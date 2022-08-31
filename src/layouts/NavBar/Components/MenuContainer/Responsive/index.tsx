import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {HiOutlineMenuAlt2} from 'react-icons/hi';
import { useNavBarContext } from "../../..";
import SubMenuResponsiveComponent from "../../SubMenu/Responsive";

// INTERFACE
export interface ICatetoryClickState{
    list_movies: boolean,
    list_tvshow: boolean,
    list_people: boolean,
    list_more: boolean
}

const initialStateCategoryClick: ICatetoryClickState = {
    list_movies: false,
    list_tvshow: false,
    list_people: false,
    list_more: false
}




const MapCategoryClickState = (item: string, currentState: ICatetoryClickState): ICatetoryClickState =>{
    const keyItem = `list_${item.toLowerCase().replace(' ', '')}`;
    var tempState = currentState;
    (Object.keys(currentState) as (keyof typeof currentState)[]).find((key) =>{
            if (keyItem === key)
            {
                const newState = {
                    ...currentState,
                    [key]: !currentState[key]
                }
                tempState = newState;
            }
    })
    return tempState;
}

const MenuContainerResponsiveComponent: React.FunctionComponent = () =>{
    const {data} = useNavBarContext();
    const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
    const [isCategoryClick, setCategoryClick] = useState<ICatetoryClickState>(initialStateCategoryClick);
    const handleOpenMenu = (e: React.MouseEvent<HTMLElement>): void =>{
        if (e.type === 'click')
        {
            setOpenMenu(!isOpenMenu);
        }
    }
    
    //Handle Catetory Click
    const HandleCatetoryClick = (item: string) =>{
        const newState = MapCategoryClickState(item, isCategoryClick);
        if (newState !== isCategoryClick)
        {
            setCategoryClick(newState);
        }
    }
    useEffect(() =>{
        (Object.keys(isCategoryClick) as (keyof typeof isCategoryClick)[]).find((key) => {
            try{
                const ElementId = document.getElementById(key);
                if (ElementId === null)
                {
                    return
                }else{
                    const ElementIcon = document.getElementById(`icon_${key}`);
                    if (isCategoryClick[key])
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
    },[isCategoryClick])
    return(
    <div>
        <button className="block md:hidden" onClick={handleOpenMenu}>
            <HiOutlineMenuAlt2 size={'30px'} className=''/>
        </button>
        <div className={`md:hidden fixed top-0 h-full w-full duration-500 ${isOpenMenu ? 'right-0' : 'right-[-100%]'} z-30`}>
            <nav className='block h-screen w-3/4 overflow-y-auto px-6 py-6 ml-auto z-10 relative bg-white text-black'>
                <button className='absolute top-2 left-2' onClick={handleOpenMenu}>
                    <AiOutlineClose size={'20px'}/>
                </button>
                <ul className='text-3xl'>
                    {data.map((Subitem) => {
                        return(
                            <SubMenuResponsiveComponent title={Subitem.title} list_submenu={Subitem.list_submenu} HandleCategoryClick={HandleCatetoryClick}/>
                        )
                    })}
                </ul>
            </nav>
        </div>
    </div>
    )
}
export default MenuContainerResponsiveComponent;