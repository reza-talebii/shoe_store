import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/search-slice";
//components
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import classes from "./Search.module.css";
import Input from "../UI/Inputs/Input";

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    dispatch(filterActions.searchValue(searchValue));
  };

  return (
    <form className={classes["form-search"]}>
      <Input
        type="text"
        placeholder="سرچ ..."
        value={searchValue}
        onChange={searchHandler}
      />
      <div className={classes["voice-icon"]}>
        <FaMicrophoneSlash />
      </div>
    </form>
  );
};

export default Search;
