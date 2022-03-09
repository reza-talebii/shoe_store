import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataShoes } from "./store/shoes-action";
import { useDispatch, useSelector } from "react-redux";

//component
import Home from "./pages/home";
import AddProducts from "./pages/addProducts";
// import Products from "./pages/products";

const App = () => {
  // const shoes = useSelector((state) => state.shoes.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataShoes());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={"/*"} element={<Home />} />
      <Route path={"/add-product"} element={<AddProducts />} />
      {/* <Route path={"/products"} element={<Products />} /> */}
    </Routes>
  );
};

export default App;
