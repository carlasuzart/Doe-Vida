import HeaderAlt from "../../components/HeaderAlt";
import { Container } from "./style";

function PatientsScheduleList() {
  return (
    <Container>
      <HeaderAlt type="hospital" />
      <div className="patientsList">
        <div className="dateDiv">
          <h1>13/07/2022</h1>
          <span>x</span>
        </div>
        <div className="patientCard">
          <p>Fernando Scramignon Narde</p>
          <p>scramignonnarde@gmail.com</p>
        </div>
        <div className="patientCard">
          <p>Victor Cazuriaga</p>
          <p>Victorhugocazuriaga@gmail.com</p>
        </div>
        <div className="patientCard">
          <p>Caio Marinho</p>
          <p>caionovo10@gmail.com</p>
        </div>
        <div className="patientCard">
          <p>Jamily Lima</p>
          <p>jamilylima70@gmail.com</p>
        </div>
        <div className="patientCard">
          <p>Carla Suzart</p>
          <p>carlagosuzart@gmail.com</p>
        </div>
      </div>
    </Container>
  );
}

export default PatientsScheduleList;
