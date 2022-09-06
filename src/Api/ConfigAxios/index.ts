import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';
import queryString from 'query-string';



const responseBody = (response: AxiosResponse) => response.data;
export const API_KEY = 'e5d7a4030427b28bf48da1b5f35b3ec7';
const AxiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    paramsSerializer: params => queryString.stringify(params),
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    }
});


export const AxiosResquest = {
    get: (url: string, params: AxiosRequestConfig) => AxiosClient.get(url, params).then(responseBody)
}

export const paramsBase = {
    api_key: API_KEY
}