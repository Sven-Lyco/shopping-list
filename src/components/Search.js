import "./searchbar.css";
import "./searchlistitems.css";

export default function Search({ handleSearch, searchInput, items, onAddSearchedItem }) {
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
      {searchInput && (
        <ul className="search-list">
          {items
            .filter((item) => {
              if (searchInput === "") {
                return item;
              } else if (item.name.en.toLowerCase().includes(searchInput.toLowerCase())) {
                return item;
              }
              return "";
            })
            .map((item) => (
              <li
                className="search-list-item"
                key={item._id}
                onClick={(event) => {
                  onAddSearchedItem(item);
                }}
              >
                {item.name.en}
              </li>
            ))}
        </ul>
      )}
    </form>
  );
}
