import React, { useState } from "react";
import Logo from "./img/logoSisyphus.png";
import "./index.scss";
import Estudante from "./img/estudante.png";

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

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
        <button onClick={toggleModal} className="button-email">
          Enviar
        </button>
      </div>

      <img className="img-estudante" src={Estudante} alt="Estudante" />

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Sucesso!</h2>
            <p className="p-modal">
              Email enviado. Aguarde, entraremos em contato em breve.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
