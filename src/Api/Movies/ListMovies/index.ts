import {paramsBase, AxiosResquest} from "../../ConfigAxios";
import { IDetailMovieBase, IResponseListBase } from "../../interface";


interface IResponseListMoviesDiscover extends IResponseListBase<IDetailMovieBase> {}



export const GetListPopular = (type:string): Promise<IResponseListBase<IDetailMovieBase>> => {
    const params = {
        ...paramsBase
    }
    const res = AxiosResquest.get(`/${type}/popular`, {params});
    return res;
    
};

export const GetListDiscover = (type:string, categoryId?: string): Promise<IResponseListMoviesDiscover> =>{
    const params = {
        ...paramsBase,
        with_genres: categoryId
    }
    const res = AxiosResquest.get(`/discover/${type}`, {params});
    return res;
}

