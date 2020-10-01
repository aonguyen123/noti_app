import { signIn, getMe } from "./auth";
import { fetchNotify } from "./home";

const service = {
  getMe,
  signIn,
  fetchNotify,
};

export default service;
