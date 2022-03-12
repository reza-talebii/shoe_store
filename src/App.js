import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataShoes } from "./store/shoes-action";
import { useDispatch } from "react-redux";

//component
import LoadingSpinner from "./Components/UI/Loading/LoadingSpinner";
const Home = React.lazy(() => import("./pages/home"));
const AddProducts = React.lazy(() => import("./pages/addProducts"));

const App = () => {
  const dispatch = useDispatch();

  //get & update shoes list from sever
  useEffect(() => {
    dispatch(fetchDataShoes());
  }, [dispatch]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path={"/*"} element={<Home />} />
        <Route path={"/add-product"} element={<AddProducts />} />
      </Routes>
    </Suspense>
  );
};

export default App;
