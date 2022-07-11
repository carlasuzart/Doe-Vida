import CardSchedulesUser from "../../components/CardSchedulesUser/index.jsx";
import HeaderAlt from "../../components/HeaderAlt";
import { Container } from "./style";
import {  useHistory } from "react-router-dom";

function Schedules() {

  const history = useHistory();
  return (
    <Container>
      <HeaderAlt />
      <div className="topPage">
        <div className="Infos">
          <div className="buttonEContainer">
            <button onClick={()=>history.push("/EditUser")} className="E">E</button>
          </div>
          <h1 className="nameUser">Olá, Nome User</h1>
        </div>

        <button onClick={()=>history.push("/Requirements")}  className="doar">Doar</button>
      </div>

      <hr />
      <h2>Agendamentos</h2>
      <main>
        {/*  <h3>Nenhum agendamento</h3>  */}
        <ul>
          <CardSchedulesUser />
        </ul>
      </main>
    </Container>
  );
}
export default Schedules;
