import { shoesActions } from "../../store/shoes-slice";
import { useDispatch } from "react-redux";
//Components
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import img from "../../assets/123.jpg";
import classes from "./Card.module.css";

const Card = ({ shoe }) => {
  const dispatch = useDispatch();

  const removeShoeHandler = () => {
    // dispatch(shoesActions.removeShoes(shoe.code));
  };

  return (
    <section className={classes.card}>
      <section className={classes["icons-overlay"]}>
        <span className={classes["card-icon"]} onClick={removeShoeHandler}>
          <FaRegTrashAlt />
        </span>
        <span className={classes["card-icon"]}>
          <FaPencilAlt />
        </span>
      </section>

      <div className={classes["card__info"]}>
        <p>کد :{shoe.code}</p>
        <p>نام :{shoe.name}</p>
        <p>قیمت : {shoe.price}</p>
        <p>جایگاه :{shoe.place} </p>
        <p>سایزها :39-34-40-50</p>
      </div>
      <div className={classes["card__img"]}>
        <img src={img} alt="shoe" />
      </div>
    </section>
  );
};

export default Card;
