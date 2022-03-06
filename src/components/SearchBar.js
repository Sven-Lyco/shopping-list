import "./searchbar.css";

export default function SearchBar({ handleSearch, searchInput }) {
  return (
    <form className="searchbar-container">
      <input
        type="text"
        className="searchbar"
        placeholder="Search..."
        value={searchInput}
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      ></input>
    </form>
  );
}
