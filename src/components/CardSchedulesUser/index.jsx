import { Li } from ".";

function CardSchedulesUser({ date, address, name }) {
  const mes = date.slice(5, 7);
  const ano = date.slice(0, 4);
  const dia = date.slice(8, 10);

  return (
    <Li>
      <div className="infoDiv">
        <span>{`${dia}/${mes}/${ano}`}</span>
        <h4>{name}</h4>
        <p className="endereçoHospital">{address}</p>
        <p>Horário de atendimento: 08:00hs às 14:00hs</p>
      </div>
    </Li>
  );
}

export default CardSchedulesUser;
