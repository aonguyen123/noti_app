import utils from "utils";

async function signIn(users) {
  const response = await utils.request("POST", "/auth/signin", users, null);
  return response.data;
}
async function getMe() {
  const response = await utils.request("GET", "/auth/me", null, null);
  return response.data;
}

export { signIn, getMe };
