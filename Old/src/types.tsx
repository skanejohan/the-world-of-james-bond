export interface IMovie {
    id: number;
    title: string;
    year: number;
    enabled: boolean;
    description: string;
    scenes: IScene[];
} 

export interface IScene {
    title: string;
    description: string;
}
