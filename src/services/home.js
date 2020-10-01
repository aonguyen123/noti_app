import utils from "utils";

async function fetchNotify() {
  const response = await utils.request("GET", "/notify/getNotify", null, null);
  return response.data;
}

export { fetchNotify };
