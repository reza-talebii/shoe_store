import { FaBars } from "react-icons/fa";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <FaBars className={classes["icon-nav"]} />
      <h1>انبار کفش</h1>
      <h3 className={classes["icon-add"]}>+</h3>
    </nav>
  );
};

export default Navbar;
