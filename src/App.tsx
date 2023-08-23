import {} from "react";
import Logo from "./img/logoSisyphus.png";
import "./index.scss";
import Estudante from "./img/estudante.png";

function App() {
  return (
    <>
      <div className="menu">
        <img src={Logo} alt="Logo" />
        <a>Sobre</a>
        <a>Serviços</a>
        <a>Produtos</a>

        <button>Demonstração</button>
      </div>

      <div className="container">
        <h1>Gerencie suas tarefas pessoais e de toda a equipe.</h1>
        <p>
          Monitore suas tarefas pessoais e de toda a equipe com mais facilidade
          conosco.
        </p>

        <input className="input-email" type="text" placeholder="Email" />

        <button className="button-email">Enviar</button>
      </div>

      <img className="img-estudante" src={Estudante} alt="Estudante" />
    </>
  );
}

export default App;
