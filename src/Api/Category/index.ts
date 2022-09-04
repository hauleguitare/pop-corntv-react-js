import { AxiosRequestConfig } from "axios";
import { API_KEY, AxiosClient, responseBody } from "../ConfigAxios";

type IResponseListCategory = {
    genres: Array<IResultCategory>
}

export type IResultCategory = {
    id: number | string,
    name: string
}

const Templateparams = {
    api_key: API_KEY
}

const CategoryRequest = {
    get: (url: string, params: AxiosRequestConfig) => AxiosClient.get(`/genre${url}`, params).then(responseBody)
}

export const GetListCategory = (type: string, lang: string = 'en'):Promise<IResponseListCategory> =>{
    const params = {
        language: lang,
        ...Templateparams
    }
    return CategoryRequest.get(`/${type}/list`, {params});
}
