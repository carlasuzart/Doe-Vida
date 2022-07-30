import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
export const schedulesContext = createContext([]);

export const SchedulesProvider = ({ children }) => {
  const [SchedulesList, setSchedulesList] = useState([]);
  const [currentSchedule, setCurrentSchedule] = useState();

  function requisiçãoShedules() {
    axios({
      method: "GET",
      url: `https://doe-vida-api2.herokuapp.com/scheduling`,
    }).then((resp) => {
      setSchedulesList(resp.data);
      return resp;
    });
  }

  useEffect(() => {
    requisiçãoShedules();
  }, []);

  return (
    <schedulesContext.Provider
      value={{
        SchedulesList,
        currentSchedule,
        setCurrentSchedule,
        requisiçãoShedules,
        setSchedulesList,
      }}
    >
      {children}
    </schedulesContext.Provider>
  );
};
