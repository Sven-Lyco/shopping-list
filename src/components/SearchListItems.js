import "./searchlistitems.css";

export default function SearchListItems({ searchInput, items, onAddSearchedItem }) {
  return (
    <ul className="search-list">
      {items
        .filter((item) => {
          return item.name.en.toLowerCase().includes(searchInput.toLowerCase());
        })

        .map((item) => (
          <li
            className="search-list-item"
            key={item._id}
            onClick={() => {
              onAddSearchedItem(item);
            }}
          >
            {item.name.en}
          </li>
        ))}
    </ul>
  );
}
