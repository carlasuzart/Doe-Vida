import { useHistory } from "react-router-dom";
import { Container } from "./style";

function HospitalListCard({ name, address, id }) {
  function getCurrentHospitalId() {
    localStorage.removeItem("currentHospitalId");
    localStorage.setItem("currentHospitalId", id);
    console.log(localStorage.getItem("currentHospitalId"));
  }

  const history = useHistory();

  return (
    <Container
      onClick={() => {
        getCurrentHospitalId();
        history.push("/DateAvaliable");
      }}
    >
      <h2>{name}</h2>
      <p>{address}</p>
    </Container>
  );
}

export default HospitalListCard;
