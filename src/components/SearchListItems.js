import "./searchlistitems.css";

export default function SearchListItems({ searchTerm, shoppingItems, onAddSearchedItem }) {
  const filteredItems = shoppingItems.filter((item) =>
    item.name.en.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <ul className="search-list">
      {filteredItems.map((item) => (
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
