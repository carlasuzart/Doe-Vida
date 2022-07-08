import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "https://apicapstonejson.herokuapp.com";


export const registerUser = (data) =>
  axios
  ({
      url: `${baseUrl}/register`,
      method: "POST",
      data: data,
    })
    .then((success) => {  
    toast.success("Conta criada com sucesso!")
      return success}
    )
    .catch((err) =>{
    
      if(err.response.data==='Email already exists'){
        
        toast.error("Email já cadastrado, tente outro!")
      }
      else{
        toast.error("Ocorreu algum erro. Tente novamente mais tarde")
      }
         return err
    })
    ;

export const loginUser = (data) =>
  axios
    ({
      url: `${baseUrl}/login`,
      method: "POST",
      data: data,
    })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));


