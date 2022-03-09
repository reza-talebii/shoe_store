import React from "react";
import classes from "./Card-section.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

const CardSections = (props) => {
  const shoes = useSelector((state) => state.shoes.items);

  return (
    <section className={classes.cardSection}>
      {shoes.map((shoe) => (
        <Card shoe={shoe} />
      ))}
    </section>
  );
};

export default CardSections;
