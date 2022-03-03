import "./ListItem.css";

export default function ListItem({ item, deleteItem }) {
  return (
    <li
      key={item._id}
      className="List-Item"
      onClick={() => deleteItem(item._id)}
    >
      {item.name.en}
    </li>
  );
}
