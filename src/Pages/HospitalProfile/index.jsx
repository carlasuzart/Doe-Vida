import HeaderAlt from "../../components/HeaderAlt";
import { Container, Schedules } from "./style";
import {  useHistory } from "react-router-dom";

function HospitalProfile() {
  const history = useHistory()
  const nameHospital = localStorage.getItem("@CapstoneM3:NameHospital");
  const addressHospital = localStorage.getItem("@CapstoneM3:AddressHospital");

  return (
    <Container>
      <HeaderAlt type="hospital" />
      <div className="hospitalInfo">
        <h2>{nameHospital}</h2>
        <p>{addressHospital}</p>
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
