import doacao_sangue from "../../assets/doacao_sangue.png";
import { Main } from "./style";

function ContainerHome() {
  return (
    <div>
      <Main>
        <img src={doacao_sangue} alt="Imagem doação de sangue" />
      </Main>
    </div>
  );
}

export default ContainerHome;
