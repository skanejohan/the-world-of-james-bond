import { IMovie, IScene } from "../types";

interface Props {
    movie: IMovie;
}

const MovieDetails = ({movie}: Props) => {
  
  const renderScene = (s: IScene) => {
    type Desc = {
      state: "desc";
      desc: string;
    }
    type Link = {
      state: "link";
      text: string;
      link: string;
    }
    type Part = Desc | Link;


    let parts: Part[] = [];
    let stringPos = 0, markerStart = 0, markerEnd = 0;
    while (true) {
      markerStart = s.description.indexOf("[", markerEnd);
      markerEnd = s.description.indexOf("]", markerStart);
      if (markerStart === -1 || markerEnd === -1) {
        break;
      }
      parts.push({ state: "desc", desc: s.description.slice(stringPos, markerStart)});
      let marker = s.description.slice(markerStart+1, markerEnd);
      let text = marker.split("|")[0];
      let link = marker.split("|")[1];
      parts.push( { state: "link", text: text, link: link } );
      stringPos = markerEnd + 1;
    }
    parts.push({ state: "desc", desc: s.description.slice(stringPos) });

    return (
      <div key={s.title}>
          <p className="text-2xl">{s.title}</p>
          {parts.map(part => {
            switch(part.state)
            {
              case "desc":
                return part.desc;
              case "link":
                return <button className="bg-gray-300">{part.text}</button>
              default:
                return "";
              }
          })}
          <br></br>
      </div>
    )
  }

  return (
    <>
      {movie.scenes.map(s => <>{renderScene(s)}<br></br></>)}
    </>
  )
}

export default MovieDetails