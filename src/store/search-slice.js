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

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
