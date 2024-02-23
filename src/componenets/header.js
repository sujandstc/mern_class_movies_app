import { useRef } from "react";

const Header = (props) => {
  const searchText = useRef();

  const searchMovie = () => {
    props.searchFunction(searchText.current.value);
  };

  return (
    <>
      This is header!
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" ref={searchText} />
        <button type="submit" onClick={searchMovie}>
          Search
        </button>
      </form>
    </>
  );
};

export default Header;
