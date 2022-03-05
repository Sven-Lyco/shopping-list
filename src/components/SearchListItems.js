import "./searchlistitems.css";

export default function SearchListItems({ items }) {
  return (
    <ul className="search-list">
      {items.map((item) => (
        <li className="list-item" key={item._id}>
          {item.name.en}
        </li>
      ))}
    </ul>
  );
}
