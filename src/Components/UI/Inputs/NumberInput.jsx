import classes from "./NumberInput.module.css";

const NumberInput = () => {
  return <input type="number" className={classes.numberInput} min="0" />;
};

export default NumberInput;
