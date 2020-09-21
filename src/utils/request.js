import axios from "axios";

export function request(method, endPoint, data, params) {
  return axios({
    method,
    url: `http://localhost:7000${endPoint}`,
    data,
    params,
  });
}
export function setHeaderRequest(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
