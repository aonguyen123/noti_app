import { signIn, getMe } from "./auth";
import { getAllNotify } from "./home";

const service = {
  getMe,
  signIn,
  getAllNotify,
};

export default service;
