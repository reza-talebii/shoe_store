import { createSlice } from "@reduxjs/toolkit";
// import axios from ""
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

//send shoe in sever
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

// get shoes from server
export const fetchDataShoes = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(URL);

      // if (!response.ok) {
      //   throw new Error("Could not fetch cart data!");
      // }

      const data = await response.json();

      return data;
    };

    const cartData = await fetchData();
  };
};

export const shoesActions = shoesSlice.actions;
export const shoesReducer = shoesSlice.reducer;
