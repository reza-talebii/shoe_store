import { shoesActions } from "./shoes-slice";
const URL = "http://localhost:8000/shoes";

//send shoe in sever
export const sendRequest = (shoe) => {
  return async () => {
    const sendData = async () => {
      const respond = await fetch("http://localhost:8000/shoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ shoe, id: shoe.code }),
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
    dispatch(shoesActions.replaceShoes(cartData));
  };
};

// remove shoe
export const removeRequest = (ID) => {
  return async () => {
    const removeData = async () => {
      const respond = await fetch(`http://localhost:8000/shoes/${ID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

    await removeData();
  };
};
