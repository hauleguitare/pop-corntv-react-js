import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ISubMenuComponentProps } from "../../SubMenu";
import SubMenuResponsiveComponent from "../../SubMenu/Responsive";


interface IMenuContainerResponsiveComponentProps{
    data: Array<ISubMenuComponentProps>
}

interface ICatetoryClick{
    list_movies: boolean,
    list_tvshow: boolean,
    list_people: boolean,
    list_more: boolean
}


const MenuContainerResponsiveComponent: React.FunctionComponent<IMenuContainerResponsiveComponentProps> = (props) =>{
    const {data} = props;
    const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
    const [isClickCatetory, setClickCatetory] = useState<ICatetoryClick>(
        {
            list_movies : false,
            list_tvshow: false,
            list_people: false,
            list_more: false
        }
    );
    const handleOpenMenu = (e: React.MouseEvent<HTMLElement>): void =>{
        if (e.type === 'click')
        {
            setOpenMenu(!isOpenMenu);
        }
    }
    
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
    useEffect(() => {
        const element = document.getElementById('body_content');
        if (element !== null)
        {
            if (isOpenMenu)
            {
                element.classList.add('overflow-hidden');
            }else{
                element.classList.remove('overflow-hidden');
            }
        }else{
            return;
        }
    }, [isOpenMenu])

    return(
    <div>
        <button className="block md:hidden" onClick={handleOpenMenu}>
            <HiOutlineMenuAlt2 size={'30px'} className=''/>
        </button>
        <div className={`md:hidden fixed top-0 h-full w-full duration-500 ${isOpenMenu ? 'right-0' : 'right-[-100%]'} z-30`}>
            {isOpenMenu && (
                <div className='fixed top-0 h-screen w-full'></div>
            )}
            <nav className='block h-screen w-3/4 overflow-y-auto px-6 py-6 ml-auto z-10 relative bg-white text-black'>
                <button className='absolute top-2 left-2' onClick={handleOpenMenu}>
                    <AiOutlineClose size={'20px'}/>
                </button>
                <ul className='text-3xl flex gap-4 flex-col'>
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