import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "",
  name: "",
  price: "",
  place: "",
  sizes: [],
};

const shoesSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    addShoes() {},
    removeShoes() {},
    editShoes() {},
    sellShoes() {},
  },
});

export const shoesActions = shoesSlice.actions;
export const shoesReducer = shoesSlice.reducer;
