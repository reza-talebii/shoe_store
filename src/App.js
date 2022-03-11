import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataShoes } from "./store/shoes-action";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "./client/server";

//component
import Home from "./pages/home";
import AddProducts from "./pages/addProducts";
// import Products from "./pages/products";

const App = () => {
  const dispatch = useDispatch();

  const fetchPost = async () => {
    const { data } = await supabase.from("shoes").select();

    console.log(data);
  };

  const sendRequest = async () => {
    await supabase
      .from("shoes")
      .insert([
        {
          id: 2,
          items: {
            name: "nike",
            code: 2,
          },
        },
      ])
      .single();

    fetchPost();
  };

  //get & update shoes list from sever
  useEffect(() => {
    // dispatch(fetchDataShoes());
    // fetchPost();
    sendRequest();
  }, []);

  return (
    <Routes>
      <Route path={"/*"} element={<Home />} />
      <Route path={"/add-product"} element={<AddProducts />} />
      {/* <Route path={"/products"} element={<Products />} /> */}
    </Routes>
  );
};

export default App;
