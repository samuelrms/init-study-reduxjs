import { createAction, createSlice } from "@reduxjs/toolkit";

export const INCREMENT = createAction("incrementar");
export const REDUCE = createAction("reduzir");

const slice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = slice.actions;
export const reducerCount = slice.reducer;
