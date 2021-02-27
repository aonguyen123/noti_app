import { request } from "utils";

async function fetchNotify() {
  const response = await request("GET", "/notify/getNotify", null, null);
  return response.data;
}

export { fetchNotify };
