import { createSlice } from "@reduxjs/toolkit";
const URL = "http://localhost:8000/shoes";

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

export const sendRequest = (shoe) => {
  return async () => {
    const sendData = async () => {
      const respond = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shoe),
      });
    };

    await sendData();
  };
};

export const shoesActions = shoesSlice.actions;
export const shoesReducer = shoesSlice.reducer;
