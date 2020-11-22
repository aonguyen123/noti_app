import service from "services";

export default {
  namespace: "auth",
  state: {},
  reducers: {},
  effects: {
    *signin({ users }, { put, call }) {
      const data = yield call(service.signIn, users);
      console.log(data);
    },
  },
};
