import { shoesReducer } from "./shoes-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    shoes: shoesReducer,
  },
});

export default store;
