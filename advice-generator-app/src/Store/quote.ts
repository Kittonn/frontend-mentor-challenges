import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getRandomQuote = createAsyncThunk(
  "/api",
  async () => {
    return axios
      .get(`https://api.adviceslip.com/advice`)
      .then((res) => res.data);
  }
);

interface QuoteStateI {
  data: any;
  status: string;
}

const initialState: QuoteStateI = {
  data: {},
  status: "",
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomQuote.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getRandomQuote.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(getRandomQuote.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export default quoteSlice;
