import { createContext } from "react";
import axios from "axios";
import { useEffect, useState} from "react";
export const schedulesContext = createContext([]);


export const SchedulesProvider = ({ children }) => {
    const [SchedulesList,setSchedulesList] =useState([]) ;

 function requisiçãoShedules() {
    
       axios({
         method: "GET",
         url: `https://s6-11-fernando-sramignon.herokuapp.com/scheduling`,
       }).then((resp) => {
         setSchedulesList(resp.data)
         return resp;
       });
   }
    
    useEffect(()=>{
        requisiçãoShedules()
    },[]) 
      
    

    return (
      <schedulesContext.Provider value={{ SchedulesList,requisiçãoShedules }}>
        {children}
      </schedulesContext.Provider>
    );
  };