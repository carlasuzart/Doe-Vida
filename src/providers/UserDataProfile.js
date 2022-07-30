import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
export const userDataContext = createContext([]);



export const UserDataProvider = ({ children }) => {
  const [UserDataProfile, setUserDataProfile] = useState([]);
  const [currentUserDataProfile, setCurrentUserDataProfile] = useState();

 const requisiçãoDados = () =>  {
    const id = localStorage.getItem("@CapstoneM3:userId");
    axios({
      method: "GET",
      url: `https://doe-vida-api2.herokuapp.com/users/${id}`,
    }).then((resp) => {
      setUserDataProfile(resp.data);
      return resp;
    });
    return UserDataProfile
  }
  
  useEffect(() => {
    requisiçãoDados()
  }, []);
  
  console.log(UserDataProfile);


  return (
    <userDataContext.Provider
      value={{
        UserDataProfile,
        setUserDataProfile,
        currentUserDataProfile,
        setCurrentUserDataProfile,
        requisiçãoDados
      }}
    >
      {children}
    </userDataContext.Provider>
  );
};
