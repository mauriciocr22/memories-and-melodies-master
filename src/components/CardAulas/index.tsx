import "./style.css";
import bgGuitarra from "../../assets/guitars1.png";
import { Video } from "../Videos";

export function CardAulas() {
  return (
    <div className="container">
      <div className="card">
        <h1>Conheça um pouco do curso de guitarra!</h1>
        <img src={bgGuitarra} alt="Imagem de fundo (guitarras)" />
        <div className="midia">
        <iframe src="https://www.youtube.com/embed/NsVf9m2ZnlA" title="Propaganda - MM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className="listaVideos">
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    </div>
  );
}