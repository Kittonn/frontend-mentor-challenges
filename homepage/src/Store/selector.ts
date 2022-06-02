import store from "./store";

type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export const selectData = (state:rootState) => state.data.data
