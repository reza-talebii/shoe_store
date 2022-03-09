import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/shoes-logo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      {/* <Link to={"/products"}> */}
      {/* <FaBars className={classes["icon-nav"]} /> */}
      {/* </Link> */}
      <Link to={"/add-product"}>
        <h3 className={classes["icon-add"]}>+</h3>
      </Link>
      <h1>انبار کفش</h1>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
