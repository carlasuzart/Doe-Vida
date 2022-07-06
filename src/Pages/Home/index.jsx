import ContainerHome from "../../components/ContainerHome";
import Header from "../../components/Header";
import { Container } from "./style";

function Home() {
  return (
    <Container>
      <Header />
      <ContainerHome />
    </Container>
  );
}

export default Home;
