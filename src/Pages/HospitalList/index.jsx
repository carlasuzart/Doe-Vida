import HeaderAlt from "../../components/HeaderAlt";
import HospitalListCard from "../../components/HospitalListCard";
import { Container } from "./style";

function HospitalList() {
  return (
    <>
      <Container>
        <HeaderAlt />
        <ul className="list">
          <HospitalListCard
            name="Hospital da Posse"
            address={
              "Av. Henrique Duque Estrada Meyer, Nova Iguaçu, Rio de Janeiro"
            }
          />
          <HospitalListCard
            name="Hospital da Posse"
            address={
              "Av. Henrique Duque Estrada Meyer, Nova Iguaçu, Rio de Janeiro"
            }
          />
          <HospitalListCard
            name="Hospital da Posse"
            address={
              "Av. Henrique Duque Estrada Meyer, Nova Iguaçu, Rio de Janeiro"
            }
          />
          <HospitalListCard
            name="Hospital da Posse"
            address={
              "Av. Henrique Duque Estrada Meyer, Nova Iguaçu, Rio de Janeiro"
            }
          />
          <HospitalListCard
            name="Hospital da Posse"
            address={
              "Av. Henrique Duque Estrada Meyer, Nova Iguaçu, Rio de Janeiro"
            }
          />
          <HospitalListCard
            name="Hospital da Posse"
            address={
              "Av. Henrique Duque Estrada Meyer, Nova Iguaçu, Rio de Janeiro"
            }
          />
          <HospitalListCard
            name="Hospital da Posse"
            address={
              "Av. Henrique Duque Estrada Meyer, Nova Iguaçu, Rio de Janeiro"
            }
          />
        </ul>
      </Container>
    </>
  );
}

export default HospitalList;
