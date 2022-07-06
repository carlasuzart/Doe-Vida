import blood from "../../assets/blood.jpg";
import { Main } from "./style";

function ContainerHome() {
  return (
    <div>
      <Main>
        <img src={blood} alt="Imagem doação de sangue" />
      </Main>
    </div>
  );
}

export default ContainerHome;
