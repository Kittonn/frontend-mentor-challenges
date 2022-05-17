import store from "./store";

type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch;

export const selectQuote = (state:rootState) => state.quote.data