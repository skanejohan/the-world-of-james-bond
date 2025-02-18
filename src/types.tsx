export interface IMovie {
    id: number;
    title: string;
    year: number;
    poster: string;
    scenes: IScene[];
}

export interface IScene {
    title: string;
    content: string;
    time: Date
}