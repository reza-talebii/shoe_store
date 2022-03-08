import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import classes from "./Search.module.css";
import Input from "../UI/Inputs/Input";

const Search = () => {
  return (
    <form className={classes["form-search"]}>
      <Input type="text" placeholder="سرچ ..." />
      <div className={classes["voice-icon"]}>
        <FaMicrophoneSlash />
      </div>
    </form>
  );
};

export default Search;
