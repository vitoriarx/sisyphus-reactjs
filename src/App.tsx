import {} from "react";
import minhaImagem from "./img/logoSisyphus.png";
import "./index.scss";

function App() {
  return (
    <>
      <div className="menu">
        <img src={minhaImagem} alt="Logo" />
        <a>About</a>
        <a>Services</a>
        <a>Product</a>

        <button>Demo</button>
      </div>

      <div className="container">
        <h1>Manage your personal and all team task.</h1>
        <p>Monitoring your personal and all team task more easily with us.</p>

        <input className="input-email" type="text" placeholder="Email" />

        <button>Send</button>
      </div>
    </>
  );
}

export default App;
