import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link to={"/products"}>
        <FaBars className={classes["icon-nav"]} />
      </Link>
      <h1>انبار کفش</h1>
      <Link to={"/add-product"}>
        <h3 className={classes["icon-add"]}>+</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
