import HeaderAlt from "../../components/HeaderAlt";
import { Container, PatientsList } from "./style";
import { useContext } from "react";
import { schedulesContext } from "../../providers/SchedulesList";
import PatientsScheduledCard from "../../components/PatientsScheduledCard";
import { useHistory } from "react-router-dom";

function SchedulesByDate() {
  const { currentSchedule } = useContext(schedulesContext);
  const company_number = localStorage.getItem("@CapstoneM3:company_number");
  const currentScheduleLocal = localStorage.getItem("currentSchedule");
  const { SchedulesList } = useContext(schedulesContext);

  const schedulesFilterUser =
    SchedulesList &&
    SchedulesList.filter((item) => {
      return (
        item.company_number === company_number &&
        item.date === currentScheduleLocal
      );
    });

  function formatYYMMDD(date) {
    const mounth = date.slice(5, 7);
    const year = date.slice(0, 4);
    const day = date.slice(8, 10);

    return `${day}/${mounth}/${year}`;
  }

  const history = useHistory();

  return (
    <Container>
      <HeaderAlt type="hospital" />
      <PatientsList>
        <div className="dateDiv">
          <h1>{currentScheduleLocal && formatYYMMDD(currentScheduleLocal)}</h1>
          <span onClick={() => history.push("/HospitalProfile")}>x</span>
        </div>
        <div className="patientDiv">
          {schedulesFilterUser &&
            schedulesFilterUser.map((user, index) => (
              <PatientsScheduledCard
                name={user.name}
                email={user.email}
                key={index}
              />
            ))}
        </div>
      </PatientsList>
    </Container>
  );
}

export default SchedulesByDate;
