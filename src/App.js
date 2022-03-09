import { Routes, Route } from "react-router-dom";

//component
import Home from "./pages/home";
import AddProducts from "./pages/addProducts";
// import Products from "./pages/products";

const App = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<Home />} />
      <Route path={"/add-product"} element={<AddProducts />} />
      {/* <Route path={"/products"} element={<Products />} /> */}
    </Routes>
  );
};

export default App;
