import "./SearchListItems.css";

export default function SearchListItems({ searchTerm, shoppingItems, onAddSearchedItem }) {
  const filteredItems = shoppingItems.filter((item) =>
    item.name.en.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <ul className="Search-List">
      {filteredItems.map((item) => (
        <li
          className="Search-List-Item"
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
