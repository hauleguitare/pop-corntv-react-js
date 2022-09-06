import { IActionActiveCategoryState } from "../../action/activeCategory";


export interface IActiveIdState {
    id?: number | string,
    name?: string
}




interface IMapKey {
    [type: string]:{
        status: boolean,
        data: IActiveIdState
    }
}

interface IActiveCateogryState extends IMapKey{
    movie:{
        status: boolean,
        data: IActiveIdState
    },
    tv: {
        status: boolean,
        data: IActiveIdState
    },
    person:{
        status: boolean,
        data: IActiveIdState
    },
    trending: {
        status: boolean,
        data: IActiveIdState
    }
}



const inititalState: IActiveCateogryState = {
    movie:{
        status: false,
        data: {
            id: undefined,
            name: undefined
        }
    },
    tv:{
        status: false,
        data: {
            id: undefined,
            name: undefined
        }
    },
    person:{
        status: false,
        data: {
            id: undefined,
            name: undefined
        }
    },
    trending:{
        status: false,
        data: {
            id: undefined,
            name: undefined
        }
    },
}




const ActiveCategoryReducer = (state: IActiveCateogryState = inititalState, action: IActionActiveCategoryState) => {
    switch(action.type)
    {
        case "MOVIE/UPDATE_ACTIVEID":{
            const newState = {
                ...state,
                movie: action.payload
            }
            return newState;
        }

        case "MOVIE/UPDATE_STATUS": {
            const newState = {
                ...state,
                movie: {
                    ...state.movie,
                    status: action.payload.status,
                }
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

        case "TV/UPDATE_STATUS": {
            const newState = {
                ...state,
                tv: {
                    ...state.tv,
                    status: action.payload.status,
                }
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

        case "PERSON/UPDATE_STATUS": {
            const newState = {
                ...state,
                person: {
                    ...state.person,
                    status: action.payload.status,
                }
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

        case "TRENDING/UPDATE_STATUS": {
            const newState = {
                ...state,
                trending: {
                    ...state.trending,
                    status: action.payload.status,
                }
            }
            return newState;
        }
        default:{
            return state;
        }
    }
};
export default ActiveCategoryReducer;