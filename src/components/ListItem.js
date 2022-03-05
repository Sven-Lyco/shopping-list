import "./listitem.css";

export default function ListItem({ item, deleteItem }) {
  return (
    <li className="list-item" onClick={() => deleteItem(item._id)}>
      {item.name.en}
    </li>
  );
}
