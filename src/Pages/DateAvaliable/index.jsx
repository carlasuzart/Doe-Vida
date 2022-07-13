import HeaderAlt from "../../components/HeaderAlt";
import { Container, Content } from "./style";

import { getHospital } from "../../services/FakeApi";
import { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

registerLocale("pt-br", ptBR);

function DateAvaliable() {

  const history = useHistory();
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

  const [startDate, setStartDate] = useState(null);

  const dateFormatAux = (date) => {
    let scheduled = new Date(date),
      month = "" + (scheduled.getMonth() + 1),
      day = "" + scheduled.getDate(),
      year = scheduled.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const dateFormat = (date) => {
    console.log(new Date(date));

    let formatYearMonthDay = dateFormatAux(date);

    return formatYearMonthDay;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let scheduledYMD = "";
    if (startDate != null) scheduledYMD = dateFormat(startDate);

    let formData = {
      scheduledDate: startDate,
      scheduledDateFmtYMD: scheduledYMD,
    };

    console.log(formData);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/")
    }
  }, [])
  return (
    <>
      <HeaderAlt />
      <Container>
        <Content>
          <form onSubmit={handleSubmit}>
            <h1>{currentHospital?.company_name}</h1>
            <p>{currentHospital?.address}</p>
            <div className="form__datepicker">
              <label>Escolha sua data</label>
              <DatePicker
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                onChange={(date) => setStartDate(date)}
                filterDate={(date) =>
                  date.getDay() !== 6 && date.getDay() !== 0
                }
                placeholderText="Clique para escolher"
                locale="pt-br"
                id="selectedDate"
                excludeDates={[new Date()]}
              />
              <button id="button" type="submit">
                Agendar
              </button>
            </div>
          </form>
        </Content>
      </Container>
    </>
  );
}

export default DateAvaliable;
