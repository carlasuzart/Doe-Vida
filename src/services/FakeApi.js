import axios from "axios";
import { toast } from "react-toastify";

//baseUrl
// const baseUrl = "https://apicapstonejson.herokuapp.com";
const baseUrl = "http://localhost:3002";

//save token in localStorage
const saveToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const loginUser = (data) =>
  axios({
    url: `${baseUrl}/login`,
    method: "POST",
    data: data,
  })
    .then((resp) => {
      toast.success("Usuário Logado com sucesso");
      saveToken(resp.data.accessToken);
      return resp;
    })
    .catch((error) => {
      toast.error(error.response.data);
      return error;
    });

export const registerUser = (data) =>
  axios({
    url: `${baseUrl}/register`,
    method: "POST",
    data: data,
  })
    .then((success) => {
      toast.success("Conta criada com sucesso!");
      return success;
    })
    .catch((err) => {
      if (err.response.data === "Email already exists") {
        toast.error("Email já cadastrado, tente outro!");
      } else {
        toast.error("Ocorreu algum erro. Tente novamente mais tarde");
      }
      return err;
    });

export const getHospitals = () => {
  return axios({
    url: `${baseUrl}/users?type=hospital`,
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((resp) => {
    return resp;
  });
};
