import CardSchedulesUser from "../../components/CardSchedulesUser/index.jsx";
import HeaderAlt from "../../components/HeaderAlt";
import { Container } from "./style";

function Schedules() {
  return (
    <Container>
      <HeaderAlt/>
        <div className="topPage">
        <div className="Infos">
          <div className="buttonEContainer">
            <button className="E">E</button>
          </div>
          <h1 className="nameUser">
       
            Olá, Nome User
          </h1>
        </div>
    
          <button className="doar">Doar</button>
        
      </div>
     
      <hr />
      <h2>Agendamentos</h2>
      <main>
        {/*  <h3>Nenhum agendamento</h3>  */}
  <ul>

      <CardSchedulesUser/>
      <CardSchedulesUser/>
      <CardSchedulesUser/>
      <CardSchedulesUser/>
      <CardSchedulesUser/>
      

     

  </ul>  
      </main>
    </Container>
  );
}
export default Schedules;
