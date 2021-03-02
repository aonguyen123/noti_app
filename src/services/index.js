import { signIn, getMe } from "./auth";
import { getAll } from "./home";

const service = {
  getMe,
  signIn,
  getAll,
};

export default service;
