import { IActiveIdState } from "../../reducer/activeCategory";


export interface IActionActiveCategoryState{
    type: string,
    payload:IPayloadAction
}
interface IPayloadAction{
    status: boolean,
    data: IActiveIdState
}


class ActionActiveCategory {
    type: string;
    constructor(type: string){
        this.type = type;
    }
    UpdateActiveId(payload: IPayloadAction){
        const action = {
            type: `${this.type.toUpperCase()}/UPDATE_ACTIVEID`,
            payload: payload
        };
        return action;
    }

    UpdateStatus(status: boolean){
        const action = {
            type: `${this.type.toUpperCase()}/UPDATE_STATUS`,
            payload: {
                data: null,
                status: status
            }
        };
        return action;
    }
}

export default ActionActiveCategory;