import { request } from "utils";

async function signIn(users) {
  const url = '/auth/signin'
  return request.post(url, users);
}
async function getMe() {
  const response = await request("GET", "/auth/me", null, null);
  return response.data;
}

export { signIn, getMe };
