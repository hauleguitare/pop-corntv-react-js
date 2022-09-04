import { API_KEY, AxiosClient, responseBody } from "../../ConfigAxios";
import { AxiosRequestConfig } from "axios";
import { IResponseListMoviesPopular, IResultsListMovies } from "../ListMovies";

export interface IResultsListTrending extends IResultsListMovies{}

export interface IResponseListTrending extends IResponseListMoviesPopular{}


const TrendingRequest = {
    get: (url: string, params: AxiosRequestConfig) => AxiosClient.get(url, params).then(responseBody)
    
}

export const GetListTrending = (type: string, media_type: string ='all', time_windows: string ='day'):Promise<IResponseListTrending> =>{
    const url = `${type}/${media_type}/${time_windows}`;
    const params = {
        api_key: API_KEY
    };
    const res = TrendingRequest.get(url, {params});
    return res;
}
