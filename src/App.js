import { Routes, Route } from "react-router-dom";

//component
import Home from "./pages/home";
import Products from "./pages/products";
import AddProducts from "./pages/addProducts";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<Home />} />
      <Route path={"/add-product"} element={<AddProducts />} />
      <Route path={"/products"} element={<Products />} />
    </Routes>
  );
};

export default App;
