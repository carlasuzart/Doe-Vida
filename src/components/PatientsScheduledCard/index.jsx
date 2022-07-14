import { Container } from "./style";
import { IoMdTrash } from "react-icons/io"
import { delet } from "../../services/FakeApi";

function PatientsScheduledCard({ name, email, id }) {


  async function handleClick() {
    await delet(id)
    document.location.reload(true)
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
