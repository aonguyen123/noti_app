import axios from "axios";

export function request(method, endPoint, data, params) {
  return axios({
    method,
    url: `https://nest-app-api.herokuapp.com${endPoint}`,
    data,
    params,
  });
}
export function setHeaderRequest(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
