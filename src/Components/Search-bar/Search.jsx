import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <form className={classes["form-search"]}>
      <input type="text" placeholder="سرچ ..." className={classes.input} />
      <div className={classes["voice-icon"]}>
        <FaMicrophoneSlash />
      </div>
    </form>
  );
};

export default Search;
