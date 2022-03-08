import img from "../../assets/123.jpg";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <section className={classes.card}>
      <div className={classes["card__info"]}>
        <p>کد :123</p>
        <p>نام :nike</p>
        <p>قیمت :123</p>
        <p>جایگاه :قفسه 3</p>
        <p>سایزها :39-34-40-50</p>
      </div>
      <div className={classes["card__img"]}>
        <img src={img} alt="shoe" />
      </div>
    </section>
  );
};

export default Card;
