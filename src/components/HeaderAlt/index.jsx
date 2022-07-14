import { Container } from "./style";
import { useHistory } from "react-router-dom";

function HeaderAlt({ type }) {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Container type={type}>
      <h1>
        Doe <span>Vida</span>
      </h1>
      <button onClick={handleLogout}>sair</button>
    </Container>
  );
}

export default HeaderAlt;
