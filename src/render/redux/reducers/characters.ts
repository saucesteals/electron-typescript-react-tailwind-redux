import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { charCode: 33, char: "!" };

export const incrementChar = createAction<number | undefined>("char/increment");

export const decrementChar = createAction<number | undefined>("char/decrement");

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementChar, (state, action) => {
    const incrementBy = action.payload ?? 1;
    const next = state.charCode + incrementBy;
    const charCode = next <= 126 ? next : 33;
    return { charCode, char: String.fromCharCode(charCode) };
  });

  builder.addCase(decrementChar, (state, action) => {
    const decrementBy = action.payload ?? 1;
    const next = state.charCode - decrementBy;
    const charCode = next >= 33 ? next : 126;
    return { charCode, char: String.fromCharCode(charCode) };
  });
});

export default reducer;
