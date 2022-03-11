import { shoesActions } from "./shoes-slice";
import { supabase } from "../client/server";
const URL = "http://localhost:8000/shoes";

//send shoe in sever
export const sendRequest = (shoe) => {
  return async () => {
    const sendShoe = async () => {
      await supabase
        .from("shoes")
        .insert([
          {
            codeID: shoe.code,
            items: shoe,
          },
        ])
        .single();
    };
    await sendShoe();
  };
};

// get shoes from server
export const fetchDataShoes = () => {
  return async (dispatch) => {
    const fetchShoes = async () => {
      const { data } = await supabase.from("shoes").select();
      return data;
    };

    const shoesData = await fetchShoes();
    dispatch(shoesActions.replaceShoes(shoesData));
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
