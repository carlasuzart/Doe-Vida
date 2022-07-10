import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "https://apicapstonejson.herokuapp.com";

export const loginUser = (data) =>
  axios({
    url: `${baseUrl}/login`,
    method: "POST",
    data: data,
  })
    .then((resp) => toast.success("Usuário Logando com sucesso"))
    .catch((error) => toast.error(error.response.data));
    
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
