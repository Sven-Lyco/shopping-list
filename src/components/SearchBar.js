import "./Searchbar.css";

export default function SearchBar({ onSearch, searchTerm }) {
  return (
    <form className="Searchbar__Container" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="search-item" className="Search__Text">
        Search for articles:
      </label>
      <input
        id="search-item"
        type="text"
        className="Searchbar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
    </form>
  );
}
