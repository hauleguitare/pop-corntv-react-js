import { AxiosRequestConfig } from "axios";
import {AxiosClient, API_KEY, responseBody} from "../../ConfigAxios";


export interface IResultsListMovies {
    poster_path : string | null,
    adult: boolean,
    overview: string,
    release_date : string,
    genre_ids: number[],
    id : number,
    original_language: string,
    name: string | undefined,
    title: string | undefined,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
}

export interface IResponseListMoviesPopular {
    page: number,
    results: IResultsListMovies[],
    total_results: number,
    total_pages: number
}

interface IResponseListMoviesDiscover extends IResponseListMoviesPopular {}


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

export const GetListDiscover = (type:string, categoryId?: string): Promise<IResponseListMoviesDiscover> =>{
    const params = {
        api_key : API_KEY,
        with_genres: categoryId
    }
    const res = MoviesResquest.get(`/discover/${type}`, {params});
    return res;
}

