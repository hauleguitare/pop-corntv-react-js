import { IActiveIdState } from "../../reducer/ActiveCategory";


export interface IActionActiveCategoryState{
    type: string,
    payload: IActiveIdState
}



class ActionActiveCategory {
    type: string;
    constructor(type: string){
        this.type = type;
    }
    UpdateActiveId(payload: IActiveIdState){
        const action = {
            type: `${this.type.toUpperCase()}/UPDATE_ACTIVEID`,
            payload: payload
        };
        return action;
    }
}

export default ActionActiveCategory;