import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Search from "../Components/Search-bar/Search";
import Card from "../Components/Card/Card";
import CardSection from "../Components/Card/Card-sections";

const Home = () => {
  return (
    <>
      <Navbar />
      <Search />
      <CardSection>
        <Card />
      </CardSection>
    </>
  );
};

export default Home;
