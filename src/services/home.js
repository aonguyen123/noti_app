import {request} from "utils";
import {FAKE_LIST_NOTI} from "./fakeData";

// async function fetchNotify() {
//   const response = await request("GET", "/notify/getNotify", null, null);
//   return response.data;
// }

const getAllNotify = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FAKE_LIST_NOTI);
    }, 5000);
  });
};

const addNotify = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}

export {getAllNotify, addNotify};
