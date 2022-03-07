import "./searchbar.css";

export default function SearchBar({ onSearch, searchInput }) {
  return (
    <form className="searchbar-container" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="search-item" className="search-input-text">
        Search for articles:
      </label>
      <input
        id="search-item"
        type="text"
        className="searchbar"
        placeholder="Search..."
        value={searchInput}
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
    </form>
  );
}
