import logo from "../../assets/logo.jpg";

import { Container } from "./style";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <Container>
      <main>
        <div className="LogoAndName">

        <img src={logo} alt="Gota de Sangue" />
        <h1>Doe</h1>
        <h2>Vida</h2>
      </div>
        <div className="buttons">
        <button className="red" onClick={() => history.push("/LoginUser")}>
          Doador
        </button>
        <button
          className="green"
          onClick={() => history.push("/LoginHospital")}
        >
          Hospital
        </button>
      </div>

      </main>
    </Container>
  );
}

export default Home;
