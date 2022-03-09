import classes from "./NumberInput.module.css";

const NumberInput = (props) => {
  return (
    <input
      type="number"
      className={classes.numberInput}
      min="0"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default NumberInput;
