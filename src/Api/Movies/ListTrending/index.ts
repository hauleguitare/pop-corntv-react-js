import {AxiosResquest, paramsBase} from "../../ConfigAxios";
import { IDetailMovieBase, IResponseListBase } from "../../interface";

export interface IDetailMovieTrending extends IDetailMovieBase{
    media_type: string
}

export interface IResponseListTrending extends IResponseListBase<IDetailMovieTrending>{
}




export const GetListTrending = (type: string, media_type: string ='all', time_windows: string ='day'):Promise<IResponseListTrending> =>{
    const url = `${type}/${media_type}/${time_windows}`;
    const params = {
        ...paramsBase
    };
    const res = AxiosResquest.get(url, {params});
    return res;
}
