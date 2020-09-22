import { fetchNotify } from "./../services/home";

const app = {
  namespace: "app",
  state: {
    notifies: [],
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        notifies: payload,
      };
    },
  },
  effects: {
    *fetchNotify(_, { call, put }) {
      const data = yield call(fetchNotify);
      yield put({ type: "save", payload: data });
    },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/te") {
          dispatch({ type: "fetchNotify" });
        }
      });
    },
  },
};
export default app;
