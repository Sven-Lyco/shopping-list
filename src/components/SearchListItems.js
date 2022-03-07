import "./searchlistitems.css";

export default function SearchListItems({
  searchInput,
  items,
  onAddSearchedItem,
}) {
  const filterdItems = items.filter((item) =>
    item.name.en.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <ul className="search-list">
      {filterdItems.map((item) => (
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
