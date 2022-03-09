import { createSlice } from "@reduxjs/toolkit";
// import axios from ""

const initialState = {
  items: [],
};

const shoesSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    addShoes(state, action) {
      const newShoes = action.payload;

      state.items.push({
        code: newShoes.code,
        name: newShoes.name,
        price: newShoes.price,
        place: newShoes.place,
        sizes: newShoes.sizes,
      });
    },
    replaceShoes(state, action) {
      state.items = action.payload;
    },
    removeShoes(state, action) {
      const newItems = state.items.filter(
        (item) => item.code !== action.payload
      );

      state.items = newItems;
    },
    editShoes() {},
    sellShoes() {},
  },
});

export const shoesActions = shoesSlice.actions;
export const shoesReducer = shoesSlice.reducer;
