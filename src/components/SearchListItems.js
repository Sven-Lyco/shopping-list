import "./searchlistitems.css";

export default function SearchListItems({ searchInput, items }) {
  return (
    <ul className="search-list">
      {items
        .filter((item) => {
          if (searchInput === "") {
            return item;
          } else if (
            item.name.en.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return item;
          }
          return "";
        })
        .map((item) => (
          <li className="list-item" key={item._id}>
            {item.name.en}
          </li>
        ))}
    </ul>
  );
}
