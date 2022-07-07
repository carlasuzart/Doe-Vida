import axios from "axios";
const baseUrl = "https://apicapstonejson.herokuapp.com";

export const registerUser = (data) =>
  axios
    .post({
      url: `${baseUrl}/register`,
      method: "POST",
      data: data,
    })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));

export const loginUser = (data) =>
  axios
    .post({
      url: `${baseUrl}/login`,
      method: "POST",
      data: data,
    })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));
