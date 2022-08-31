import axios, { Axios, AxiosResponse } from 'axios';
import queryString from 'query-string';



export const responseBody = (response: AxiosResponse) => response.data;
export const API_KEY = 'e5d7a4030427b28bf48da1b5f35b3ec7';
export const AxiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    paramsSerializer: params => queryString.stringify(params),
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    }
});

export const AxiosClientImage = axios.create({
    baseURL: 'https://image.tmdb.org/t/p',
    headers: {
        'Content-Type': 'image/jpeg'
    }
});
