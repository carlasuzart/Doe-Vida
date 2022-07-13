import HeaderAlt from "../../components/HeaderAlt";
import { Container, Schedules } from "./style";
import { useHistory } from "react-router-dom";
import CardSchedulesHospital from "../../components/CardSchedulesHospital/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";


function HospitalProfile() {
  const history = useHistory();
  const nameHospital = localStorage.getItem("@CapstoneM3:NameHospital");
  const addressHospital = localStorage.getItem("@CapstoneM3:AddressHospital");
  const [arrSchedules, setArrSchedules] = useState();
  const company_number = localStorage.getItem("@CapstoneM3:company_number")

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://s6-11-fernando-sramignon.herokuapp.com/scheduling`,
    }).then((resp) => {
      setArrSchedules(resp.data);
      return resp;
    });
  }, []);

 

  const schedulesFilterUser =
    arrSchedules &&
    arrSchedules.filter((item) => {
      return item.company_number===company_number
    });

   console.log(schedulesFilterUser)

  function agendation() {
    if (schedulesFilterUser && schedulesFilterUser.length === 0) {
      return(
        <div className="noAgendation">

          <h3>Nenhum agendamento</h3>;
        </div>
      )
      
    }
    return (
      <ul className="scheduleCards">
        {schedulesFilterUser &&
          schedulesFilterUser.map(({ id,date,name }) => <CardSchedulesHospital date={date} name={name} key={id} />)}
      </ul>
    );
  }





  return (
    <Container>
      <HeaderAlt type="hospital" />
      <div className="hospitalInfo">
        <h2>{nameHospital}</h2>
        <p>{addressHospital}</p>
        <button onClick={() => history.push("/EditHospital")}>e</button>
      </div>
      <Schedules>
        <div className="scheduleTitle">
          <h2>Agendamentos</h2>
          <button onClick={() => history.push("/EditHospital")}>e</button>
        </div>

      {agendation()}
      </Schedules>
    </Container>
  );
}

export default HospitalProfile;
