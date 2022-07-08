import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "https://apicapstonejson.herokuapp.com";

export const registerUser = (data) =>
  axios({
    url: `${baseUrl}/register`,
    method: "POST",
    data: data,
  })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));

export const loginUser = (data) =>
  axios({
    url: `${baseUrl}/login`,
    method: "POST",
    data: data,
  })
    .then((resp) => toast.success("Usuário Logando com sucesso"))
    .catch((error) => toast.error(error.response.data));
