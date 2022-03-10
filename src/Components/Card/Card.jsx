import { shoesActions } from "../../store/shoes-slice";
import { useDispatch } from "react-redux";
import { removeRequest } from "../../store/shoes-action";
import { useNavigate } from "react-router-dom";
//Components
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import classes from "./Card.module.css";

function formatToCurrency(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

const Card = ({ shoe }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeShoeHandler = () => {
    dispatch(removeRequest(shoe.code));
    dispatch(shoesActions.removeShoes(shoe.code));
  };

  const editShoeHandler = () => {
    navigate("/add-product", { state: shoe });
  };

  return (
    <section className={classes.card}>
      <section className={classes["icons-overlay"]}>
        <span className={classes["card-icon"]} onClick={removeShoeHandler}>
          <FaRegTrashAlt />
        </span>
        <span className={classes["card-icon"]} onClick={editShoeHandler}>
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
          قیمت : <span>{shoe.price}</span> تومان
        </p>
        <p>
          جایگاه : <span>{shoe.place}</span>
        </p>
      </div>
      <div className={classes["card__sizes"]}>
        <p>
          37 : <span>{shoe.sizes.size37}</span>
        </p>
        <p>
          38 : <span>{shoe.sizes.size38}</span>
        </p>
        <p>
          39 : <span>{shoe.sizes.size39}</span>
        </p>
        <p>
          40 : <span>{shoe.sizes.size40}</span>
        </p>
        <p>
          41 : <span>{shoe.sizes.size41}</span>
        </p>
        <p>
          42 : <span>{shoe.sizes.size42}</span>
        </p>
        <p>
          43 : <span>{shoe.sizes.size43}</span>
        </p>
        <p>
          44 : <span>{shoe.sizes.size44}</span>
        </p>
        <p>
          45 : <span>{shoe.sizes.size45}</span>
        </p>
      </div>
    </section>
  );
};

export default Card;
