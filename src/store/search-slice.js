import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchValue(state, action) {
      state.searchFilter = action.payload;
    },
  },
});

export const shoesActions = filterSlice.actions;
export const shoesReducer = filterSlice.reducer;
