import { Li } from ".";

function CardSchedulesUser({date,address}) {

 

const mes=date.slice(5, 7)
const ano= date.slice(0, 4)
const dia=date.slice(8, 10)


  return (
    <Li>
      <div className="infoDiv">
        <h4>Hospital da Posse</h4>
        <span>{`${dia}/${mes}/${ano}`}</span>
      </div>

      <p className="endereçoHospital">
       {address}
      </p>
    </Li>
  );
}

export default CardSchedulesUser;
