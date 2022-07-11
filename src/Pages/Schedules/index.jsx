import CardSchedulesUser from "../../components/CardSchedulesUser/index.jsx";
import HeaderAlt from "../../components/HeaderAlt";
import { Container } from "./style";

function Schedules() {

  const nameUser=localStorage.getItem("@CapstoneM3:NameUser")
  return (
    <Container>
      <HeaderAlt />
      <div className="topPage">
        <div className="Infos">
          <div className="buttonEContainer">
            <button className="E">E</button>
          </div>
          <h1 className="nameUser">Olá, {nameUser}</h1>
        </div>

        <button className="doar">Doar</button>
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
