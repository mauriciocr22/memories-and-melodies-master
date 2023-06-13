import "./style.css";
import Notas from "../../assets/notasMusicais.svg";
export function Historia() {
  return (
    <section className="container">
      <h1 id="tituloHistoria">História da música</h1>
      <div className="texto">
        <img src={Notas} alt="Imagem com notas musicais" />
        <div className="textoHistoria">
          <p>
            A música tem uma longa história que remonta à pré-história, quando
            as pessoas começaram a fazer sons rítmicos usando instrumentos
            primitivos. Ao longo dos séculos, a música evoluiu e se tornou uma
            parte importante da cultura em todo o mundo. Na Grécia e Roma
            antigas, a música era usada em cerimônias religiosas e eventos
            públicos e privados. Durante a Idade Média, a música era
            principalmente vocal e usada na igreja para acompanhar os serviços
            religiosos. Nos períodos Renascentista e Barroco, a música
            instrumental começou a ganhar importância, e surgiram novos
            instrumentos. No período clássico, a música se tornou mais formal e
            estruturada, enquanto no período romântico, tornou-se mais emocional
            e expressiva. No século XX, surgiram novos gêneros musicais, como o
            jazz, o rock, o pop e o hip-hop, e a tecnologia teve um grande
            impacto na música, com o surgimento de gravações e instrumentos
            eletrônicos. A música continua a evoluir e a desempenhar um papel
            importante na vida das pessoas em todo o mundo.
          </p>
        </div>
      </div>
    </section>
  );
}
