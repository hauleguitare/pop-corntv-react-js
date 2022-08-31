import { AxiosClientImage } from "../ConfigAxios";


type paramSize = 'w300' | 'w780' | 'w1280' | 'original';

const GetImage = (url: string ,size: paramSize = 'original') => {
    return AxiosClientImage.get(`/size/${url}`);
}