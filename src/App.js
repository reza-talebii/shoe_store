import { Routes, Route } from "react-router-dom";

//component
import home from "./pages/home";
import products from "./pages/products";
import addProducts from "./pages/addProducts";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path={"/add-product"} element={<addProducts />} />
    </Routes>
  );
};

export default App;
