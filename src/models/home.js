import service from "services";
import { routerRedux } from "dva";

const home = {
  namespace: "home",
  state: {
    notifies: []
  },
  reducers: {
    saveNotifyList(state, { payload }) {
      return {
        ...state,
        notifies: payload,
      };
    },
  },
  effects: {
    *logout(_, {call, put, select}) {
      const redirectUrl = [];
      const {locationPathname, locationQuery} = yield select((_) => _.app);
      if (locationPathname) redirectUrl.push(locationPathname);
      if (locationQuery) redirectUrl.push(locationQuery);
      yield put(
        routerRedux.push(
          `/login?redirectUrl=${encodeURIComponent(redirectUrl.join(""))}`
        )
      );
    },
    *fetchNotify(_, { call, put }) {
      const res = yield call(service.getAllNotify)
      yield put({type: 'saveNotifyList', payload: res})
    },
  },
  subscriptions: {
    loadNotify({history, dispatch}) {
      return history.listen(({pathname, query}) => {
        if(pathname === '/home') {
          dispatch({ type: "fetchNotify" });
        }
      })
    },
  },
};
export default home;
