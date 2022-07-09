import { Container } from "./style";

function HospitalListCard({ name, address }) {
  return (
    <Container>
      <h2>{name}</h2>
      <p>{address}</p>
    </Container>
  );
}

export default HospitalListCard;
