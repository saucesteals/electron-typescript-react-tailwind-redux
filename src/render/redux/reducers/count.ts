import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = 1;

export const incrementCounter = createAction<number | undefined>(
  "counter/increment"
);

export const decrementCounter = createAction<number | undefined>(
  "counter/decrement"
);

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementCounter, (state, action) => {
    const incrementBy = action.payload ?? 1;
    return state + incrementBy;
  });
  builder.addCase(decrementCounter, (state, action) => {
    const decrementBy = action.payload ?? 1;
    return state - decrementBy;
  });
});

export default reducer;
