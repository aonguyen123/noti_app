const test = {
    namespace: 'todo',
      state: [],
    reducers: {
      add(state, { payload: todo }) {
        // Save data to state
        return [...state, todo];
      },
    },
    effects: {
      *save({ payload: todo }, { put, call }) {
        // Call saveTodoToServer, then trigger `add` action to save data
        // yield call(saveTodoToServer, todo);
        yield put({ type: 'add', payload: todo });
      },
    },
    subscriptions: {
      setup({ history, dispatch }) {
        // Subscribe history(url) change, trigger `load` action if pathname is `/`
        return history.listen(({ pathname }) => {
          if (pathname === '/') {
            dispatch({ type: 'load' });
          }
        });
      },
    },
  }
  export default test