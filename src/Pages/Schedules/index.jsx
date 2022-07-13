import CardSchedulesUser from "../../components/CardSchedulesUser/index.jsx";
import HeaderAlt from "../../components/HeaderAlt";
import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { schedulesContext } from "../../providers/SchedulesList";
import { useContext } from "react";
import {BiEdit} from "react-icons/bi"


function Schedules() {
  const userId = localStorage.getItem("@CapstoneM3:userId");
  const { SchedulesList } = useContext(schedulesContext);

  const history = useHistory();
  const nameUser = localStorage.getItem("@CapstoneM3:NameUser");

  const schedulesFilterUser =
    SchedulesList &&
    SchedulesList.filter((item) => {
      return item.userId === +userId;
    });

  function agendation() {
    console.log(schedulesFilterUser);
    if (schedulesFilterUser && schedulesFilterUser.length === 0) {
      return <h3>Nenhum agendamento</h3>;
    }
    return (
      <ul>
        {schedulesFilterUser &&
          schedulesFilterUser.map(({ id, date, address, company_name }) => (
            <CardSchedulesUser
              name={company_name}
              address={address}
              date={date}
              key={id}
            />
          ))}
      </ul>
    );
  }

  return (
    <Container>
      <HeaderAlt />
      <div className="topPage">
        <div className="Infos">
          <div className="buttonEContainer">

            <button onClick={() => history.push("/EditUser")} className="E">
              <BiEdit/>
            </button>
          </div>
          <h1 className="nameUser">Olá, {nameUser}</h1>
        </div>

        <button onClick={() => history.push("/Requirements")} className="doar">
          Doar
        </button>
      </div>

      <hr />
      <h2>Agendamentos</h2>
      <main>{agendation()}</main>
    </Container>
  );
}
export default Schedules;
