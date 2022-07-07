import HeaderAlt from "../../components/HeaderAlt";
import { Container, Schedules } from "./style";

function HospitalProfile() {
  return (
    <Container>
      <HeaderAlt type="hospital" />
      <div className="hospitalInfo">
        <h2>Hospital da Posse</h2>
        <p>Av. Henrique Duque Estrada Meyer, Nova Iguaçu, Rio de Janeiro</p>
        <button>e</button>
      </div>
      <Schedules>
        <div className="scheduleTitle">
          <h2>Agendamentos</h2>
          <button>e</button>
        </div>
        <div className="scheduleCards">
          <div className="cardItem">
            <span>12/07/2022</span>
            <span>13/30</span>
          </div>
          <div className="cardItem">
            <span>12/07/2022</span>
            <span>2/30</span>
          </div>
        </div>
      </Schedules>
    </Container>
  );
}

export default HospitalProfile;
