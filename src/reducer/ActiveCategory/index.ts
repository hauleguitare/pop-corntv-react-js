import { IActionActiveCategoryState } from "../../action/ActiveCategory";


export interface IActiveIdState {
    id?: number | string,
    name?: string
}


interface IMapKey {
    [type: string]: IActiveIdState
}

interface IActiveCateogryState extends IMapKey{
    movie: IActiveIdState,
    tv: IActiveIdState,
    person: IActiveIdState,
    trending: IActiveIdState
}



const inititalState: IActiveCateogryState = {
    movie: {
        id: undefined,
        name: undefined,
    },
    tv: {
        id: undefined,
        name: undefined
    },
    person: {
        id: 0,
        name: ''
    },
    trending: {
        id: 0,
        name: ''
    }

}




const ActiveCategoryReducer = (state = inititalState, action: IActionActiveCategoryState) => {
    switch(action.type)
    {
        case "MOVIE/UPDATE_ACTIVEID":{
            const newState = {
                ...state,
                movie: action.payload
            }
            return newState;
            
        }

        case "TV/UPDATE_ACTIVEID": {
            const newState = {
                ...state,
                tv: action.payload
            }
            return newState;
            
        }

        case "PERSON/UPDATE_ACTIVEID":{
            const newState = {
                ...state,
                person: action.payload
            }
            return newState;
            
        }

        case "TRENDING/UPDATE_ACTIVEID":{
            const newState = {
                ...state,
                trending: action.payload
            }
            return newState;
            
        }

        default:{
            return state;
        }
    }
};
export default ActiveCategoryReducer;