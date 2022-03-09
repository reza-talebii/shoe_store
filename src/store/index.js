import { shoesReducer } from "./shoes-slice";
import { filterReducer } from "./search-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    filter: filterReducer,
  },
});

export default store;
