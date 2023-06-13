import logoImg from "../../assets/logo.svg";
import "./style.css";

export function Navbar() {
  return (
    <>
      <header>
        <div className="navbar">
          <img src={logoImg} alt="logo" />
          <nav>
            <a href="#">ENTRAR</a>
            <a href="#" id="create-account">
              CRIAR CONTA
            </a>
          </nav>
        </div>
      </header>
      <div className="sub-header">
        <p>SEJA BEM VINDO, ALUNO</p>
      </div>
    </>
  );
}
