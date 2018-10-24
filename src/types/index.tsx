export interface IMovie {
    id: string;
    title: string;
    director: string;
    actors: Array<string>;
    description: string;
    thumbnail: string;
}

export type IMovies = Array<IMovie>;
