import "./style.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="email-form">
          <h1>Receber atualizações</h1>
          <p>
            Insira seu e-mail para receber todas as notícias e promoções
            exclusivamente!
          </p>
          <form>
            <input type="email" placeholder="Seu e-mail" required />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <span></span>
        <div className="footer-lists">
          <ul>
            <li>
              <a href="">Fale Conosco</a>
            </li>
            <li>
              <a href="">Política de Privacidade</a>
            </li>
            <li>
              <a href="">Crie sua conta</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Minha conta</a>
            </li>
            <li>
              <a href="">Informações da Empresa</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <span></span>
        <div className="contact-us">
          <h2>Contato</h2>
          <div>
            <p>Av. Senador Feijó, 350 - Vila Matias, Santos</p>
            <p>{"(13) 3227-6003"}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
