export interface IObjectIDBase {
    id: number | string,
    name: string
}

export interface IDetailMovieBase {
    poster_path : string | null,
    adult: boolean,
    overview: string,
    release_date : string,
    genres: IObjectIDBase[],
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

export interface IResponseListBase<T>{
    page: number,
    results: T[],
    total_results: number,
    total_pages: number
}