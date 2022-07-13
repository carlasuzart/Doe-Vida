import HeaderAlt from "../../components/HeaderAlt";
import { Container, Schedules } from "./style";
import { useHistory } from "react-router-dom";
import CardSchedulesHospital from "../../components/CardSchedulesHospital/index.jsx";
import { schedulesContext } from "../../providers/SchedulesList";
import { useContext } from "react";

function HospitalProfile() {
  const history = useHistory();
  const nameHospital = localStorage.getItem("@CapstoneM3:NameHospital");
  const addressHospital = localStorage.getItem("@CapstoneM3:AddressHospital");

  const company_number = localStorage.getItem("@CapstoneM3:company_number");
  const { SchedulesList } = useContext(schedulesContext);

  const schedulesFilterUser =
    SchedulesList &&
    SchedulesList.filter((item) => {
      return item.company_number === company_number;
    });

  function agendation() {
    if (schedulesFilterUser && schedulesFilterUser.length === 0) {
      return (
        <div className="noAgendation">
          <h3>Nenhum agendamento</h3>;
        </div>
      );
    }

    let dates = [];
    schedulesFilterUser.forEach((user) => {
      dates.push(user.date);
    });

    //creates a non repeting elements array
    dates = [...new Set(dates)];

    return (
      <ul className="scheduleCards">
        {dates &&
          dates.map((date, index) => (
            <CardSchedulesHospital date={date} name={""} key={index} />
          ))}
      </ul>
    );
  }

  return (
    <Container>
      <HeaderAlt type="hospital" />
      <div className="hospitalInfo">
        <h2>{nameHospital}</h2>
        <p>{addressHospital}</p>
        <button onClick={() => history.push("/EditHospital")}>e</button>
      </div>
      <Schedules>
        <div className="scheduleTitle">
          <h2>Agendamentos</h2>
          <button onClick={() => history.push("/EditHospital")}>e</button>
        </div>

        {agendation()}
      </Schedules>
    </Container>
  );
}

export default HospitalProfile;
