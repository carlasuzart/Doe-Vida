import { Container } from "./style";
import { IoMdTrash } from "react-icons/io";
import { delet } from "../../services/FakeApi";
import { useContext } from "react";
import { schedulesContext } from "../../providers/SchedulesList";

function PatientsScheduledCard({
  name,
  email,
  id,
  schedulesFilterUser,
  setSchedulesFilterUser,
}) {
  const { SchedulesList, setSchedulesList } = useContext(schedulesContext);
  function handleClick() {
    delet(id);
    setSchedulesList(SchedulesList.filter((element) => element.id !== id));
    setSchedulesFilterUser(
      schedulesFilterUser.filter((element) => element.id !== id)
    );
  }

  return (
    <Container>
      <div>
        <p>{name}</p>
        <span>{email}</span>
      </div>
      <button onClick={handleClick}>
        <IoMdTrash style={{ color: "white" }} />
      </button>
    </Container>
  );
}

export default PatientsScheduledCard;
