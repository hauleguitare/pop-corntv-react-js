import axios, { Axios } from 'axios';
import queryString from 'query-string';
const AxiosClient = axios.create({
    baseURL: 'https://api.lorem.space/image',
    paramsSerializer: params => queryString.stringify(params),
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'image/jpeg',
    }
});
export default AxiosClient;
