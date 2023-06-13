import "./style.css";

import mauricioImg from "../../assets/mauricio.jpg";
import muriloImg from "../../assets/murilo.jpg";
import mateusImg from "../../assets/mateus.jpg";
import luccaImg from "../../assets/lucca.jpg";
import joaoImg from "../../assets/joao.jpg";

export function People() {
  return (
    <section className="container-devs">
      <h1>Equipe de Desenvolvedores</h1>
      <div className="images-div">
        <div className="card-people">
          <img src={mauricioImg} alt="mauricio" />
          <div>
            <h2>Maurício de Carvalho</h2>
            <p>mauriciocr223@gmail.com</p>
            <a href="https://www.linkedin.com/in/mauriciocr22/" target="_blank">
              Linkedin
            </a>
          </div>
        </div>
        <div className="card-people">
          <img src={muriloImg} alt="murilo" />
          <div>
            <h2>Murilo Cruz</h2>
            <p>murilo1662004@gmail.com</p>
            <a
              href="https://www.linkedin.com/in/murilo-cruz-863266217/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="card-people">
          <img src={mateusImg} alt="mateus" />
          <div>
            <h2>Mateus Marques</h2>
            <p>mateusmarkz@gmail.com</p>
            <a href="https://api.whatsapp.com/send?phone=5513996289604">
              (13) 99628-9604
            </a>
          </div>
        </div>
        <div className="card-people">
          <img src={joaoImg} alt="joao" />
          <div>
            <h2>João Camilo</h2>
            <p>joaocamilo1313@gmail.com</p>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-camilo-a1b1431b3"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="card-people">
          <img src={luccaImg} alt="lucca" />
          <div>
            <h2>Lucca Bittencourt</h2>
            <p>lucca.f.bittencourt@gmail.com</p>
            <a
              href="https://www.linkedin.com/in/luccabittencourt/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
