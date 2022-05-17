import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./quote";

const store = configureStore({ reducer: { quote: quoteSlice.reducer } });

export default store;
