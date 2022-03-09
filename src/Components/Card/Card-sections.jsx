import React from "react";
import classes from "./Card-section.module.css";
import Card from "./Card";

const CardSections = ({ shoes }) => {
  return (
    <section className={classes.cardSection}>
      {shoes.map((shoe) => (
        <Card shoe={shoe} key={shoe.code} />
      ))}
    </section>
  );
};

export default CardSections;
