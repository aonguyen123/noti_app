import { routerRedux } from "dva";
import store from "store";
import service from "services";
import utils from "utils";

const app = {
  namespace: "app",
  state: {
    notifies: [],
    locationPathname: "",
    locationQuery: "",
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        notifies: payload,
      };
    },
    updateLocation(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *getMe(_, { call, put, select }) {
      const _token = store.get("_token");
      const redirectUrl = [];
      const { locationPathname, locationQuery } = yield select((_) => _.app);
      if (locationPathname) redirectUrl.push(locationPathname);
      if (locationQuery) redirectUrl.push(locationQuery);
      if (!_token) {
        // yield put(
        //   routerRedux.push(
        //     `/signup?redirectUrl=${encodeURIComponent(redirectUrl.join(""))}`
        //   )
        // );
      } else {
        yield call(utils.setHeaderRequest, _token);
        yield call(service.getMe);
      }
    },
    *fetchNotify(_, { call, put }) {
      const data = yield call(service.fetchNotify);
      yield put({ type: "save", payload: data });
    },
  },
  subscriptions: {
    setupHistory({ history, dispatch }) {
      return history.listen((location) => {
        dispatch({
          type: "updateLocation",
          payload: {
            locationPathname: location.pathname,
            locationQuery: location.query,
          },
        });
      });
    },
    setup({ dispatch }) {
      dispatch({ type: "getMe" });
    },
  },
};
export default app;
