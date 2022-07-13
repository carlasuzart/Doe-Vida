import { LI } from ".";

function CardSchedulesHospital({name,date}) {

    const mes=date.slice(5, 7)
    const ano= date.slice(0, 4)
    const dia=date.slice(8, 10)


  return (
    <LI>
      <span>{name}</span>
      <span>{`${dia}/${mes}/${ano}`}</span>
    </LI>
  );
}

export default CardSchedulesHospital;
