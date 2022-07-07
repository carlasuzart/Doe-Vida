import { Container } from "./style";

function HeaderAlt({ type }) {
  return (
    <Container type={type}>
      <h1>
        Doe <span>Vida</span>
      </h1>
      <button>sair</button>
    </Container>
  );
}

export default HeaderAlt;
