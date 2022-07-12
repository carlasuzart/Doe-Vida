import HeaderAlt from "../../components/HeaderAlt";
import { Container, Content } from "./style";
import { getHospital } from "../../services/FakeApi";
import { useState } from "react";
import { useEffect } from "react";

function DateAvaliable() {
  const [currentHospital, setCurrentHospital] = useState([]);

  useEffect(() => {
    getHospitalById();
  }, []);

  async function getHospitalById() {
    const response = await getHospital(
      localStorage.getItem("currentHospitalId")
    );
    setCurrentHospital(response.data);
  }

  return (
    <>
      <HeaderAlt />
      <Container>
        <Content>
          <form>
            <h1 onClick={() => console.log(currentHospital)}>
              {currentHospital?.company_name}
            </h1>
            <p>{currentHospital?.address}</p>
          </form>
        </Content>
      </Container>
    </>
  );
}

export default DateAvaliable;
