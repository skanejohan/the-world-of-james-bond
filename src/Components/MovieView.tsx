import { IMovie, IScene } from "../types";

interface Props {
    movie: IMovie;
    onClose: () => void;
}

const MovieView = ({movie, onClose}: Props) => {

    const RenderScene = (scene: IScene, index: number) => {
        const id = `scene${index}`;
        return (
            <div key={scene.title} className="mb-4">
                <h3 className="text-xl font-bold text-sky-600" id={id}>{scene.title}</h3>
                <p className="text-lg text-white">{scene.content}</p>
            </div>
        )
    }
    
    const RenderSceneLink = (scene: IScene, index: number) => {
        const href=`#scene${index}`;
        return (
            <div key={scene.title}>
                <a className="text-md font-bold text-sky-600" href={href}>{scene.title.toLowerCase().replaceAll('"', '')}</a>
            </div>
        )
    }

    return (
        <div>
            <div className="fixed top-0 left-0 m-4 w-40">
                <img src={movie.poster} className="rounded-sm" onClick={onClose}/>
            </div>
            <div className="ml-48 mr-96 my-4">
                {movie.scenes.map((scene, index) => RenderScene(scene, index))}
            </div>
            <div className="fixed bottom-0 right-0 m-4">
                {movie.scenes.map((scene, index) => RenderSceneLink(scene, index))}
            </div>
        </div>
    )
}
  
export default MovieView;