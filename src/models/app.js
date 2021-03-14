import store from "store";
import service from "services";
import {routerRedux} from "dva";

const app = {
  namespace: "app",
  state: {
  },
  reducers: {
    updateLocation(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    // *checkToken(_, {call, put, select}) {
    //   console.log('sss')
    //   const _token = store.get("TOKEN");
    //   const redirectUrl = [];
    //   const {locationPathname, locationQuery} = yield select((_) => _.app);
    //   if (locationPathname) redirectUrl.push(locationPathname);
    //   if (locationQuery) redirectUrl.push(locationQuery);
    //   if (!_token) {
    //     yield put(
    //       routerRedux.push(
    //         `/login?redirectUrl=${encodeURIComponent(redirectUrl.join(""))}`
    //       )
    //     );
    //   } else {
    //     yield put(routerRedux.push(`/home`));
    //     yield put({type: "saveToken", payload: _token});
    //   }
    // },
  },
  subscriptions: {
    setupHistory({history, dispatch}) {
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
  },
};
export default app;
