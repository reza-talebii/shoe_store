import React from "react";
import classes from "./Card-section.module.css";

const CardSections = (props) => {
  return <section className={classes.cardSection}>{props.children}</section>;
};

export default CardSections;
