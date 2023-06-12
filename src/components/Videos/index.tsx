import "./style.css";
import play from "../../assets/play.svg";

export function Video(){
  return (
    <div className="playlist">
      <div className="video">
        <a href="https://www.youtube.com/embed/NsVf9m2ZnlA">
          <img src={play} alt="icone de play" />
          </a>
      </div>
      <p>Aula Prática - Acordes</p>
    </div>
  );
}