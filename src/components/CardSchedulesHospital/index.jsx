import { LI } from ".";
import { useContext } from "react";
import { schedulesContext } from "../../providers/SchedulesList";
import { useHistory } from "react-router-dom";

function CardSchedulesHospital({ name, date }) {
  const mes = date.slice(5, 7);
  const ano = date.slice(0, 4);
  const dia = date.slice(8, 10);

  const history = useHistory();

  const { setCurrentSchedule } = useContext(schedulesContext);

  function handleClick() {
    setCurrentSchedule(date);
    localStorage.setItem("currentSchedule", date);
    history.push("/SchedulesByDate");
  }

  return (
    <LI onClick={handleClick}>
      <span>{name}</span>
      <span>{`${dia}/${mes}/${ano}`}</span>
    </LI>
  );
}

export default CardSchedulesHospital;
