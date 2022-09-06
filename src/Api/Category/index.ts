import { AxiosRequestConfig } from "axios";
import { API_KEY, AxiosResquest, paramsBase} from "../ConfigAxios";
import { IObjectIDBase } from "../interface";

type IResponseListCategory = {
    genres: Array<IResultCategory>
}

export interface IResultCategory extends IObjectIDBase {}




export const GetListCategory = (type: string, lang: string = 'en'):Promise<IResponseListCategory> =>{
    const params = {
        language: lang,
        ...paramsBase
    }
    return AxiosResquest.get(`genre/${type}/list`, {params});
}
