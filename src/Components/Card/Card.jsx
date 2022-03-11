import { shoesActions } from "../../store/shoes-slice";
import { useDispatch } from "react-redux";
import { removeRequest } from "../../store/shoes-action";
import { useNavigate } from "react-router-dom";
//Components
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import classes from "./Card.module.css";

const Card = ({ shoe }) => {
  const shoeItems = shoe.items;
  const shoeID = shoe.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeShoeHandler = () => {
    dispatch(removeRequest(shoeID));
    dispatch(shoesActions.removeShoes(shoeID));
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
          کد : <span>{shoeItems.code}</span>
        </p>
        <p>
          نام : <span>{shoeItems.name}</span>
        </p>
        <p>
          قیمت : <span>{shoeItems.price}</span> تومان
        </p>
        <p>
          جایگاه : <span>{shoeItems.place}</span>
        </p>
      </div>
      <div className={classes["card__sizes"]}>
        <p>
          37 : <span>{shoeItems.sizes.size37}</span>
        </p>
        <p>
          38 : <span>{shoeItems.sizes.size38}</span>
        </p>
        <p>
          39 : <span>{shoeItems.sizes.size39}</span>
        </p>
        <p>
          40 : <span>{shoeItems.sizes.size40}</span>
        </p>
        <p>
          41 : <span>{shoeItems.sizes.size41}</span>
        </p>
        <p>
          42 : <span>{shoeItems.sizes.size42}</span>
        </p>
        <p>
          43 : <span>{shoeItems.sizes.size43}</span>
        </p>
        <p>
          44 : <span>{shoeItems.sizes.size44}</span>
        </p>
        <p>
          45 : <span>{shoeItems.sizes.size45}</span>
        </p>
      </div>
    </section>
  );
};

export default Card;
