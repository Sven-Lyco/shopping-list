import "./searchbar.css";

export default function SearchBar({ handleSearch }) {
  return (
    <form className="searchbar-container">
      <input
        type="text"
        className="searchbar"
        placeholder="Search..."
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      ></input>
    </form>
  );
}
