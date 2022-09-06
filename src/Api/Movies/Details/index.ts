import {API_KEY, AxiosResquest, paramsBase} from "../../ConfigAxios";
import { IDetailMovieBase, IObjectIDBase } from "../../interface";

interface IProductionCompanies extends IObjectIDBase{
    logo_path: string | null,
    orgin_country: string
}


export interface IResponseDetailMovie extends IDetailMovieBase{
    homepage: string,
    production_companies: Array<IProductionCompanies>,
    revenue: number,
    runtime: number,
    status: string,
    tagline: string | null,
}


export const GetDetailMovie = (movieId: number, type: string):Promise<IResponseDetailMovie> =>{
    const params ={
        ...paramsBase
    }
    const res = AxiosResquest.get(`/${type}/${movieId}`, {params});
    return res;
}