import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import img from "../../assets/123.jpg";
import classes from "./Card.module.css";

const Card = ({ shoe }) => {
  return (
    <section className={classes.card}>
      <section className={classes["icons-overlay"]}>
        <span className={classes["card-icon"]}>
          <FaRegTrashAlt />
        </span>
        <span className={classes["card-icon"]}>
          <FaPencilAlt />
        </span>
      </section>

      <div className={classes["card__info"]}>
        <p>
          کد : <span>{shoe.code}</span>
        </p>
        <p>
          نام : <span>{shoe.name}</span>
        </p>
        <p>
          قیمت : <span>{shoe.price}</span>
        </p>
        <p>
          جایگاه : <span>{shoe.place}</span>
        </p>
      </div>
      <div className={classes["card__sizes"]}>
        <p>
          37 : <span>1</span>
        </p>
        <p>
          38 : <span>1</span>
        </p>
        <p>
          39 : <span>1</span>
        </p>
        <p>
          40 : <span>1</span>
        </p>
        <p>
          41 : <span>1</span>
        </p>
        <p>
          42 : <span>1</span>
        </p>
        <p>
          43 : <span>1</span>
        </p>
        <p>
          44 : <span>1</span>
        </p>
        <p>
          45 : <span>1</span>
        </p>
      </div>
    </section>
  );
};

export default Card;
