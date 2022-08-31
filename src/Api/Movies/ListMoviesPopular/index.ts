import { AxiosRequestConfig } from "axios";
import {AxiosClient, API_KEY, responseBody} from "../../ConfigAxios";


export type IResultsListMoviesPopular = {
    poster_path : string | null,
    adult: boolean,
    overview: string,
    release_date : string,
    genre_ids: number[],
    id : number,
    original_language: string,
    name: string | null,
    title: string | null,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
}

export type IResponseListMoviesPopular = {
    page: number,
    results: IResultsListMoviesPopular[],
    total_results: number,
    total_pages: number
}


const MoviesResquest = {
    get: (url: string, params: AxiosRequestConfig) => AxiosClient.get(url, params).then(responseBody)
}

export const GetListPopular = (type:string): Promise<IResponseListMoviesPopular> => {
    const params = {
        api_key: API_KEY
    }
    const res = MoviesResquest.get(`/${type}/popular`, {params});
    return res;
    
};

