import { Container } from "./style";

function PatientsScheduledCard({ name, email }) {
  return (
    <Container>
      <p>{name}</p>
      <span>{email}</span>
    </Container>
  );
}

export default PatientsScheduledCard;
