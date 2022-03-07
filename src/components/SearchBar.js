import "./Searchbar1.css";

export default function SearchBar({ onSearch, searchInput }) {
  return (
    <form className="Searchbar-Container" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="search-item" className="Search-Input-Text">
        Search for articles:
      </label>
      <input
        id="search-item"
        type="text"
        className="Searchbar"
        placeholder="Search..."
        value={searchInput}
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
    </form>
  );
}
