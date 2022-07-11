import HeaderAlt from "../../components/HeaderAlt";
import { Container, Schedules } from "./style";
import {  useHistory } from "react-router-dom";

function HospitalProfile() {
  const history = useHistory()
  return (
    <Container>
      <HeaderAlt type="hospital" />
      <div className="hospitalInfo">
        <h2>Hospital da Posse</h2>
        <p>Av. Henrique Duque Estrada Meyer, Nova Iguaçu, Rio de Janeiro</p>
        <button onClick={()=>history.push("/EditHospital")}>e</button>
      </div>
      <Schedules>
        <div className="scheduleTitle">
          <h2>Agendamentos</h2>
          <button onClick={()=>history.push("/EditHospital")}>e</button>
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
