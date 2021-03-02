import {request} from "utils";
import {FAKE_LIST_NOTI} from "./fakeData";

// async function fetchNotify() {
//   const response = await request("GET", "/notify/getNotify", null, null);
//   return response.data;
// }

const getAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAKE_LIST_NOTI);
    }, 1000);
  });
};

export {getAll};
