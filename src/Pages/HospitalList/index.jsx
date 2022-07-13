import { useState } from "react";
import HeaderAlt from "../../components/HeaderAlt";
import HospitalListCard from "../../components/HospitalListCard";
import { Container } from "./style";
import { getHospitals } from "../../services/FakeApi";
import { useEffect } from "react";
import { useHistory, } from "react-router-dom";

function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getHospitalList();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/")
    }
  }, [])

  async function getHospitalList() {
    const response = await getHospitals();
    setHospitals(response.data);
  }

  return (
    <>
      <Container>
        <HeaderAlt />
        <ul onClick={getHospitalList} className="list">
          {hospitals.length > 0 &&
            hospitals?.map((hospital) => (
              <HospitalListCard
                id={hospital.id}
                key={hospital.id}
                name={hospital.company_name}
                address={hospital.address}
              />
            ))}
        </ul>
      </Container>
    </>
  );
}

export default HospitalList;
