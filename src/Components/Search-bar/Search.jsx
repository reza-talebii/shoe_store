import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const Search = () => {
  return (
    <form>
      <input type="text" placeholder="سرچ ..." />
      <FaMicrophone />
    </form>
  );
};

export default Search;
