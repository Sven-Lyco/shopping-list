import "./searchbar.css";

export default function SearchBar({ onSearch, searchInput }) {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="searchbar-container"
    >
      <input
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
