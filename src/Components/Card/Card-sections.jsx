import { useState, useEffect } from "react";
import classes from "./Card-section.module.css";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardSections = () => {
  const searchFilterValue = useSelector((state) => state.filter.searchFilter);
  const shoes = useSelector((state) => state.shoes.items);

  let filterByCode = [];

  console.log(shoes);

  shoes.filter((item) => {
    if (item.items.code === searchFilterValue) filterByCode.push(item);
  });

  return (
    <section className={classes.cardSection}>
      {filterByCode.map((shoe) => (
        <Card shoe={shoe} key={shoe.items.code} />
      ))}
    </section>
  );
};

export default CardSections;
